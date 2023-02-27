import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-hot-toast';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginWithPopUp = (provider)=> {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const loginWithEmailAndPassword = (email,password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile =(name, photo) => {
        const profile = {displayName: name, photoURL:photo};
        return updateProfile(auth.currentUser, profile)
    }

    const providerLogOut = ()=> {
        setLoading(true);
        signOut(auth)
        .then(()=>{toast.success('LogOut Success')})
        .catch(error =>{console.error(error)})
    }
    

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{unsubscribe();}
    },[])

    const authInfo = {user, creatUser, setUser, loginWithPopUp,loginWithEmailAndPassword, updateUserProfile, providerLogOut, loading, setLoading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;