import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-VlIApodkBsIMoyv0KZNNk6Bokso7CMs",
    authDomain: "blancoydeco-7f802.firebaseapp.com",
    projectId: "blancoydeco-7f802",
    storageBucket: "blancoydeco-7f802.appspot.com",
    messagingSenderId: "762550840327",
    appId: "1:762550840327:web:46c390241ca69bba914ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
