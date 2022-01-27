import {useEffect, useState} from 'react'
import InitializationApp from '../../../../FirebaseSetup/FirebaseInit';
import {sendEmailVerification,GoogleAuthProvider,signInWithPopup, signOut, onAuthStateChanged ,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import Swal from 'sweetalert2';

InitializationApp()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [regerror, setRegerror] = useState('')
    const [logerror, setLogerror] = useState('')
    const [isloading, setIsloading] = useState(true);
    const [isadmin, setIsadmin] = useState(false)
    const provider = new GoogleAuthProvider();

    //Registration using Email And Password
    const RegisterUser = (email,password,name,navigate) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            navigate('/')
            Swal.fire(
                'Register Successfully',
                '',
                'success'
              )
            //saving user to database
            SaveUser(email,name)
        })
        .catch((error) => {
            setRegerror(error.message)
        }).finally(() => setIsloading(false));
    }
    //Login user using Email And Password
    const LoginUser = (email,password,navigate,location) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            const destination = location?.state?.from || '/';
            navigate(destination)
           
        })
        .catch((error) => {
            setLogerror(error.message)
        }).finally(() => setIsloading(false));
    }

    //google sign in
    const GoogleSignin = (navigate,location) => {
      
        signInWithPopup(auth, provider)
            .then((result) => {
                
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    // ...currentUser
                });
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // ...
                
                const destination = location?.state?.from || '/';
                navigate(destination)
                setUser(user)
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    //geting current login user
    useEffect(() => {
        setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              
            }
            setIsloading(false)
          });
    }, [auth]);
    //saving user to database
    const SaveUser = (email, name) => {
        const newuser = {email, name}
        fetch('https://aqueous-scrubland-04111.herokuapp.com/SaveUser', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newuser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    //admin checking 
    useEffect(() => {
        if(user.email){
            fetch(`https://aqueous-scrubland-04111.herokuapp.com/checkAdmin?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsadmin(data.isadmin)
       
            })
        }
        else{
            console.log('No Email')
        }
    },[user.email])
    //user Logout
    const LogoutUser = (navigate) => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser({})
            navigate('/')
          }).catch((error) => {
            // An error happened.
          }).finally(() => setIsloading(false));
    }
    return {
        user,
        setUser,
        RegisterUser,
        LoginUser,
        regerror, setRegerror,
        logerror, setLogerror,
        LogoutUser,
        isloading,
        GoogleSignin,
        isadmin, 
    }
}
export default useFirebase