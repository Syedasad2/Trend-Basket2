import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white w-screen p-4">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-md w-full border border-gray-700">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-100">Sign Up</h2>
        <form className="space-y-6">
          <Input
            isClearable
            type="text"
            label="Username"
            variant="bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full bg-gray-900 border-gray-700"
          />
          <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-gray-900 border-gray-700"
          />
          <Input
            isClearable
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="bordered"
            placeholder="Enter your password"
            className="w-full bg-gray-900 border-gray-700"
          />
          <Button
            radius="full"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            Sign Up
          </Button>
          <h3 className="text-center text-lg text-gray-300">OR</h3>
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
