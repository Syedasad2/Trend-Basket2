import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useNavigate } from "react-router-dom"; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Signed up with:", user);
      setError('');

      // Redirect to home page
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error("Signup error:", error);
      setError('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900 w-screen p-4 pt-10">
      <div className="bg-white p-6 md:p-10 lg:p-12 rounded-lg max-w-md w-full border border-gray-300 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Sign Up</h2>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <Input
            isClearable
            type="text"
            label="Username"
            variant="bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full bg-gray-100 border-gray-300"
            aria-label="Username"
          />

          {/* Email Input */}
          <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-gray-100 border-gray-300"
            aria-label="Email"
            required
          />

          {/* Password Input */}
          <Input
            isClearable
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="bordered"
            placeholder="Enter your password"
            className="w-full bg-gray-100 border-gray-300"
            aria-label="Password"
            required
          />

          {/* Sign Up Button */}
          <Button
            type="submit"
            radius="full"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>

          <h3 className="text-center text-lg text-gray-500 my-4">OR</h3>

          {/* Google Sign In Button */}
          <Button
            radius="full"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            Sign In with Google
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
