import React, { useState } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';

const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (currState === "Sign Up") {
            await handleCreateAccount();
        } else {
            await handleLogin();
        }
    };

    const handleCreateAccount = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    userName: userName,
                    email: user.email,
                });
            }
            console.log("User  registered");
            alert("Account Created Successfully");
            
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User  logged in");
            window.location.href="/";
            alert("Login Successful");
            
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit} className={styles.login_container}>
                <div className={styles.login_title}>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross} alt="" />
                </div>
                <div className={styles.login_input}>
                    {currState === "Sign Up" && (
                        <input
                            type="text"
                            placeholder='Your Name'
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder='example@gmail.com'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className={styles.login_condition}>
                    <input type="checkbox" required />
                    <p>I Agree</p>
                </div>
                {currState === "Login"
                    ? <p>Create a New Account <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>}
            </form>
        </div>
    );
};

export default Login;