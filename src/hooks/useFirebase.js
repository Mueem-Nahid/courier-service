import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //to fix reloading problem 
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(()=>setIsLoading(false));
    }

    //observer
    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                setError('');
            }else {
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    }, [auth]);

    return {
        user,
        logOut,
        isLoading,
        signInUsingGoogle,
        // signInUsingEmailAndPass,
        // createUser,
        error
    }
}

export default useFirebase;