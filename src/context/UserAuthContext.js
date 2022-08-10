import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/config";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [loggedUser, setLoggedUser] = useState("");

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
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoggedUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <userAuthContext.Provider value={{ loggedUser, signUp, signIn, logout }}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}