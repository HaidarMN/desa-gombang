import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1ltLmwaxTngGkdqOniqIwNUNcJvzQvpg",
  authDomain: "desawisata-bf6c4.firebaseapp.com",
  projectId: "desawisata-bf6c4",
  storageBucket: "desawisata-bf6c4.appspot.com",
  messagingSenderId: "117632377433",
  appId: "1:117632377433:web:5f50bf372507d9b24d8748",
  measurementId: "G-SXJQNMH2VL",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db };
