import * as React from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';

export default function Register({navigate}){
    const [email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}