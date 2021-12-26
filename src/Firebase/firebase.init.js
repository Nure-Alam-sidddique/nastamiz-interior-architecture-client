import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializationAuthentication=()=>{
    return initializeApp(firebaseConfig);
}

export default InitializationAuthentication;