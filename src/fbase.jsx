import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8_qj5Gv3_4lcEFrJF0y_yC1nDhXXE0Dc",
  authDomain: "logintest-2ea37.firebaseapp.com",
  projectId: "logintest-2ea37",
  storageBucket: "logintest-2ea37.appspot.com",
  messagingSenderId: "993631288666",
  appId: "1:993631288666:web:cf840b803a333ba6158763",
  measurementId: "G-54PG8S62M5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app, auth };
