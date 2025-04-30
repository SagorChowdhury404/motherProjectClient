import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import UseAxiosSecure from "../hooks/useAxiosSecure/UseAxiosSecure";
// import { auth } from "../firebase/firebase.config"; // <-- already exported from firebase.config

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosSecure = UseAxiosSecure();// that should use axiosPublic


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (fullName) => {
        // displayName phoneNumber /fullName, phone
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            // phoneNumber: phone
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                console.log("current user", currentUser);
                // get token and store client .*
                const userInfo = { email: currentUser.email }

                axiosSecure.post('/jwt', userInfo)
                    .then( res =>{
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
