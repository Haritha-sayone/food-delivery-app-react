import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFireStore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZ18O82rw0H97oGGj3JCO99M5nCqfPEbA",
    authDomain: "foodapp-e3bf7.firebaseapp.com",
    databaseURL: "https://foodapp-e3bf7-default-rtdb.firebaseio.com",
    projectId: "foodapp-e3bf7",
    storageBucket: "foodapp-e3bf7.appspot.com",
    messagingSenderId: "553238965376",
    appId: "1:553238965376:web:58bd95b5264252bf310a65"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const firestore = getFireStore(app);
// export const storage = getStorage(app);

export default app;