import React, { useEffect, useState } from 'react'
import PlayerCard from '../PlayerCard'

import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase/firebase.config';

import styles from './LoginCard.module.css'

export default function LoginCard(active) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const dbUsers = [];

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            dbUsers.push({
                ...doc.data(),
                id: doc.id
            });
        });

        setUsers([
            ...dbUsers
        ]);
    }

    const getUser = async () => {
        const userInfo = getAuth();
        const docRef = doc(db, "users", userInfo.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document Data: ", docSnap.data());
            setUser(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getData();
        getUser();
    }, [])

    const sortByPoints = (a, b) => {
        return b.wimPoints - a.wimPoints
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Welcome</h2>
            {
                users.sort(sortByPoints).map((u, index) => {
                    if (u.userName === user.userName) {
                        return <PlayerCard
                            key={u.id}
                            color='#DBA932'
                            name={u.userName}
                            level={u.wimPoints}
                            progBG='#F1C869'
                            logicProg={u.logicProg}
                            patternProg={u.patternProg}
                            numberProg={u.numberProg}
                            rank={index + 1}
                        />
                    }
                })
            }
        </div>
    )
}
