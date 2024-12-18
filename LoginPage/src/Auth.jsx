import { useState } from "react";
import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  // Login Function
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  // SignUp Function
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: "New User" });
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      });
      setUser(userCredential.user);
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={isLogin ? handleLogin : handleSignUp}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} style={{ marginLeft: "5px" }}>
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Auth;
