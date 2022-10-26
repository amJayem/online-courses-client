import React, { createContext } from 'react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    };

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {user, loading, providerLogin, signIn, createUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;