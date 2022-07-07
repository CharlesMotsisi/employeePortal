import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDY2sTVAxznI_GijEoZ2MZk0ylan4gLXY",
  authDomain: "employee-portal-ad32f.firebaseapp.com",
  projectId: "employee-portal-ad32f",
  storageBucket: "employee-portal-ad32f.appspot.com",
  messagingSenderId: "500914148735",
  appId: "1:500914148735:web:69cf9888372da0ce6b364a",
  measurementId: "G-PXGYNB1QS5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//const analytics = getAnalytics(app);