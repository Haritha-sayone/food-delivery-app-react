import { db } from "./config";
import {
    collection,
    doc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";


const itemCollectionRef = collection(db, "items");

class FoodDataService {
    addItems = (newItem) => {
        return setDoc(itemCollectionRef, newItem);
    }

    updateItem = (id, updatedItem) => {
        const itemDoc = doc(db, "items", id);
        return updateDoc(itemDoc, updatedItem);
    }

    deleteItem = (id) => {
        const itemDoc = doc(db, "items", id);
        return deleteDoc(itemDoc)
    }

    getAllItems = () => {
        return getDocs(itemCollectionRef)
    }

    getItem = (id) => {
        const itemDoc = doc(db, "items", id);
        return getDoc(itemDoc);
    }
}

export default new FoodDataService();
