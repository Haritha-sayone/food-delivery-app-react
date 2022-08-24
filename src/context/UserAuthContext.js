import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth, db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [loggedUser, setLoggedUser] = useState("");
    const [admin, setAdmin] = useState(false);

    function signUp(email, password, role) {
        return createUserWithEmailAndPassword(auth, email, password, role);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        // subscribing to auth changes - signup,login,logout
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoggedUser(currentUser);
            if (currentUser) {
                getDoc(doc(db, "users", currentUser.uid)).then((doc) => {
                    doc.data().role === "admin" ? setAdmin(true) : setAdmin(false);
                }).catch(err => {
                    console.log(err);
                })
            }
        });

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <userAuthContext.Provider value={{ loggedUser, admin, setAdmin, signUp, signIn, logout }}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
