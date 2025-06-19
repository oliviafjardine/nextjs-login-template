// Moved from AuthContext.ts to AuthContext.tsx
'use client'
import { auth, db } from '../../firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = React.createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [userDataObj, setUserDataObj] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // AUTH HANDLERS
    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        setUserDataObj(null);
        setCurrentUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                setLoading(true);
                setCurrentUser(user);
                if (!user) {
                    console.log('No User Found');
                    return;
                };
                // If user exists, fetch from firebase database
                console.log('Fetching User Data');
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                let firebaseData = {};
                if (docSnap.exists()) {
                    console.log('Found User Data')
                    firebaseData = docSnap.data();
                }
                setUserDataObj(firebaseData);
            } catch (err: any) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userDataObj,
        signup,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
