import { Spinner } from "@nextui-org/react";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; 

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });

  const [loading, setLoading] = useState(true);
  const [signUpError, setSignUpError] = useState(""); 


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
    return () => subscriber(); 
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
      setSignUpError(error.message); 
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
