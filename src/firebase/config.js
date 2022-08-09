import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZ18O82rw0H97oGGj3JCO99M5nCqfPEbA",
    authDomain: "foodapp-e3bf7.firebaseapp.com",
    databaseURL: "https://foodapp-e3bf7-default-rtdb.firebaseio.com",
    projectId: "foodapp-e3bf7",
    storageBucket: "foodapp-e3bf7.appspot.com",
    messagingSenderId: "553238965376",
    appId: "1:553238965376:web:58bd95b5264252bf310a65"
};

// init firebase app
const app = initializeApp(firebaseConfig);
// init services
export const auth = getAuth(app);
export const db = getFirestore(app);

const storage=getStorage(app);

//collection ref
const userRef=collection(db,'users')

// export const usersDb = db.collection('users');

// export const user = auth.currentUser
// export const userRef=doc(collection())
// export const createUserDocument = async (user, additionalData) => {
//     if (!user) return;
// }

export default app;