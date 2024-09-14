import { Spinner } from "@nextui-org/react";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; // Adjust the path as necessary

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });

  const [loading, setLoading] = useState(true);

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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Additional sign-out logic if needed
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignOut }}>
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
