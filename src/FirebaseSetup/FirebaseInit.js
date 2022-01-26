import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const InitializationApp = () => {
    return initializeApp(firebaseConfig);
};

export default InitializationApp;