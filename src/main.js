const { createApp } = require('vue');
import App from './App.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9WYvTctqvYTxQd4QWmMxrusoQhr67_yo',
  authDomain: 'cs-mofonaina.firebaseapp.com',
  databaseURL: 'https://cs-mofonaina-default-rtdb.firebaseio.com',
  projectId: 'cs-mofonaina',
  storageBucket: 'cs-mofonaina.appspot.com',
  messagingSenderId: '1021541150954',
  appId: '1:1021541150954:web:8e281fd094d29215856793',
  measurementId: 'G-PPH6WWEDQ2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount('#app');
