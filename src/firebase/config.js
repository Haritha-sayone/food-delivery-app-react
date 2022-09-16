import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
//collection refs
const usersRef = collection(db, "users");
const itemsRef = collection(db, "items");
const cartRef = collection(db, "cart");

const getItems = getDocs(itemsRef);
const getCart = getDocs(cartRef);
export default app;
export {
    auth, db, storage,
    // usersRef, itemsRef, cartRef
};









//collection ref
// export const userRef = collection(db, 'users');

// getDocs(userRef).then(snapshot => {
//     let users=[]
//     snapshot.docs.forEach(doc => {
//         users.push({ ...doc.data(), id:doc.id })
//     })
//     console.log(users);
// })

// export const usersDb = db.collection('users');

// export const user = auth.currentUser
// export const userRef=doc(collection())
// export const createUserDocument = async (user, additionalData) => {
//     if (!user) return;
// }