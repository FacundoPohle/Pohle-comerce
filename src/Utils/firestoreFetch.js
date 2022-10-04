
import { db } from '../Utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetchOne = async (idItem) => {
        const docRef = doc(db, "products", idItem);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            return {
                ...docSnap.data(),
                id: idItem
            }
        } else {
            console.log('no such document')
        }
    }

