import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyCkBwBwNSoe2NtaO7OeV-2ec0jyxf2kOrE",
    authDomain: "react-todo-f1d8b.firebaseapp.com",
    projectId: "react-todo-f1d8b",
    storageBucket: "react-todo-f1d8b.appspot.com",
    messagingSenderId: "20732001587",
    appId: "1:20732001587:web:adde504036e031d6ed1246",
    measurementId: "G-SC9ZFEMF8S"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };