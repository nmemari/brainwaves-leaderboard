import React from 'react'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase.config';

import { useState } from 'react';

import styles from './UserLogin.module.css'
import PlayerCard from '@/components/PlayerCard';
import LoginCard from '@/components/LoginCard';

export default function UserLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [active, setActive] = useState(false);
    const [loginActive, setLoginActive] = useState(true);

    const signInUser = async () => {
        try {
            const auth = getAuth();
            const loginUser = await signInWithEmailAndPassword(auth, email, password);
            console.log(loginUser);
            setActive(true);
            setEmail("");
            setPassword("");
            setLoginActive(false);
        } catch (error) {
            console.log(error);
        }
    }

    const signOutUser = async () => {
        const auth = getAuth();
        await signOut(auth);
        console.log("User Logged Out");
        setActive(false);
        setLoginActive(true);
    }

    return (
        <>
            {
                loginActive ? <div className={styles.login__container}>
                    <h2>Login in to check where you stand on the leaderboard</h2>
                    <div className={styles.login__form}>
                        <div>Email</div>
                        <input
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div>Password</div>
                        <input
                            placeholder="Password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={styles.login__btn} onClick={() => {
                        signInUser();
                    }}>LOG IN</button>
                </div> : <></>
            }
            <div>
                {
                    active ? <div className={styles.login__card}>
                        <LoginCard />
                        <button className={styles.logout__btn} onClick={() => {
                            signOutUser();
                        }}>LOG OUT</button>
                    </div> : <></>
                }
            </div>
        </>
    )
}
