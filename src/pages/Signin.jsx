import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignInWithGoogle = () => {
    setLoading(true); // Start loading
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log('User:', user);
        navigate('/'); // Redirect to home page upon successful sign-in
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(`Error Code: ${errorCode}, Message: ${errorMessage}`);
        console.error('Error Code:', errorCode);
        console.error('Error Message:', errorMessage);
        console.error('Email:', email);
        console.error('Credential:', credential);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  const handleSignInWithEmailPassword = async () => {
    setLoading(true); // Start loading
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in with email:', email);
      navigate('/'); // Redirect to home page upon successful sign-in
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(`Error Code: ${errorCode}, Message: ${errorMessage}`);
      console.error('Error Code:', errorCode);
      console.error('Error Message:', errorMessage);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900 w-screen p-4"> {/* Changed background to white */}
      <div className="bg-white p-10 rounded-lg  max-w-md w-full border border-gray-300"> {/* Container background white with border */}
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Sign In</h2>
        <form className="space-y-6">
          <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-white border-gray-300 text-gray-900" // White background for input
          />
          <Input
            isClearable
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="bordered"
            placeholder="Password"
            className="w-full bg-white border-gray-300 text-gray-900" // White background for input
          />
          {error && <p className="text-red-400 text-center">{error}</p>}
          <Button
            radius="full"
            className="w-full bg-gradient-to-r from-pink-600 to-yellow-500 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onClick={handleSignInWithEmailPassword}
            isLoading={loading} // Add loading state to button
          >
            Log In
          </Button>
          <h3 className="text-center text-lg text-gray-600">OR</h3>
          <Button
            radius="full"
            className="w-full bg-blue-400 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onClick={handleSignInWithGoogle}
            isLoading={loading} // Add loading state to button
          >
            Sign In with Google
          </Button>
          <Link to="/signup">
            <Button
              radius="full"
              className="w-full bg-blue-300 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-2"
            >
              Sign Up
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
