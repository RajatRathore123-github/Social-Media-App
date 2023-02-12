import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore, doc , setDoc } from "firebase/firestore"


const firebaseApp = initializeApp({
  apiKey: "AIzaSyAiflNMipe0ooKbutziJb-7Sn0FuOgR2LE",
  authDomain: "social-app-e2dce.firebaseapp.com",
  projectId: "social-app-e2dce",
  storageBucket: "social-app-e2dce.appspot.com",
  messagingSenderId: "150941445545",
  appId: "1:150941445545:web:9cdc8f1531f9139f0fe8b8"
});


const db = getFirestore(firebaseApp);

const database = doc(db, "auth/users");
async function writeDatabase(){
    const docData = {
        userId: "m2bR0ZXdRZgfPmQeYBW2NnDyTTi1",
        username: 'karl',
        fullName: 'Karl Hadwen',
        emailAddress: 'karlhadwen@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
    };
    try{
        setDoc(database, docData, {merge: true}); // add document if it doesn't exist
    }
    catch(e){
        console.log("error", e);
    }
}
writeDatabase();

export { firebaseApp, db };

