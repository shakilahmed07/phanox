import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth,GoogleAuthProvider , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup } from "firebase/auth";


// firebase initialize
initializeFirebase()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    console.log(admin)
    const auth = getAuth(); 
    const siginWithGoogle = (location, navigate ) => {
        const googleProvider = new GoogleAuthProvider()
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
            const user = result.user;
            const destination = location?.state?.from || '/';
            console.log('destination2', destination);
            navigate(destination)
            setUser(user);
            saveUser(user.email, 'PUT');
            
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }).finally(()=> setIsLoading(false));
    
    
    }

    // Register User
    const registerUser = (email,password,location,navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            console.log('destination2', destination);
            navigate(destination)
            setAuthError("");
            const newUser = {email: email}
            setUser(newUser);
            saveUser(email, 'POST');
          })
          .catch((error) => {
            setAuthError(error.message);
          }).finally(()=> setIsLoading(false));
    };

    // login user 
    const logInUser = (email,password,location,navigate) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const destination = location?.state?.from || '/';
            navigate(destination)
            console.log('destination2', destination);
            const newUser = { email: email }
            setUser(newUser);
            setAuthError("");
        })
        .catch((error)=> { 
            setAuthError(error.message);
            
        })
        .finally(()=> setIsLoading(false));
    }

    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            // sign out
        }).catch((error)=>{
            // error
        })
        .finally(()=> setIsLoading(false));

    }

        // user state
        useEffect(()=>{
            
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                setUser({});
                }
                setIsLoading(false)
            });
            return () => unsubscribed;
        }, [])
    
    const saveUser = (email, method) => {
        const user = {email};
        fetch('https://phonax-server.onrender.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        fetch(`https://phonax-server.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    
    return {
        user,
        registerUser,
        isLoading,
        logOut,
        logInUser,
        authError,
        siginWithGoogle,
        admin
        
    }

};

export default useFirebase;