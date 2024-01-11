// SigninForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this is the Firebase configuration

import './Signup.css';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const authInstance = getAuth();
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
      console.log('User signed in successfully!', userCredential.user);

      // Redirect to the home page after successful sign-in
      navigate('/Home');
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const authInstance = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(authInstance, provider);
      console.log('User signed in with Google:', userCredential.user);

      // Redirect to the home page after successful sign-in
      navigate('/Home');
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      <div className="divider"></div>
      <form onSubmit={handleSignIn} className="signin-form">
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>

      <div className="or-divider">OR</div>

      <button onClick={handleGoogleSignIn} className="google-signin-btn">
        Sign In with Google
      </button>
    </div>
  );
};

export default SigninForm;
