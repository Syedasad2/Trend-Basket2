import { Spinner } from "@nextui-org/react";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // Adjust the path as necessary

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });

  const [loading, setLoading] = useState(true);
  const [signUpError, setSignUpError] = useState(""); // State to handle errors during signup

  // Handle authentication state change (login/logout)
  function onAuthChanged(user) {
    if (user) {
      setUser({
        isLogin: true,
        userInfo: {
          name: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
        },
      });
    } else {
      setUser({
        isLogin: false,
        userInfo: {},
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return () => subscriber(); // Clean up on component unmount
  }, []);

  // Sign out function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Sign-up function using Firebase
  const handleSignUp = async (email, password, username) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the user profile with username (optional)
      await user.updateProfile({
        displayName: username,
      });

      setUser({
        isLogin: true,
        userInfo: {
          name: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
        },
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSignUpError(error.message); // Set signup error if any
      console.error("Sign up error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignOut, handleSignUp, signUpError }}>
      {loading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
