// Moved from AuthContext.ts to AuthContext.tsx
'use client'
import { auth, db } from '../../firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react';

interface UserData {
    [key: string]: unknown;
}

interface AuthContextType {
    currentUser: User | null;
    userDataObj: UserData | null;
    signup: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userDataObj, setUserDataObj] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    // AUTH HANDLERS
    async function signup(email: string, password: string): Promise<void> {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    async function login(email: string, password: string): Promise<void> {
        await signInWithEmailAndPassword(auth, email, password);
    }

    function logout(): Promise<void> {
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
                }
                // If user exists, fetch from firebase database
                console.log('Fetching User Data');
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                let firebaseData: UserData = {};
                if (docSnap.exists()) {
                    console.log('Found User Data')
                    firebaseData = docSnap.data() as UserData;
                }
                setUserDataObj(firebaseData);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        });
        return unsubscribe;
    }, []);

    const value: AuthContextType = {
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
