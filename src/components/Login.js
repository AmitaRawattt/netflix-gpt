import { useRef, useState } from "react";
import Header from "./Header";
import Toast from "./Toast";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL, USER_AVATAR } from "../utils/constants";


const Login=()=>{
const dispatch=useDispatch();
const navigate=useNavigate();

 const [isSignInForm,setIsSignInForm]=useState(true)   
 const [errorMessage,setErrorMessage]=useState(null)   
 const [loader,setLoader]=useState(false);   
const toggleSignInForm=()=>{
 setIsSignInForm(!isSignInForm);
}
const email=useRef(null);
const password=useRef(null);
const name=useRef(null);


const handleButtonClick=()=>{
    
  

const message=checkValidData(name?.current?.value,email?.current?.value,password?.current?.value);
setErrorMessage(message);
if(message) return;

if(!isSignInForm){
//Sign Up 
createUserWithEmailAndPassword(auth,email?.current?.value, password?.current?.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    //add name
    updateProfile(user, {
        displayName: name?.current?.value, photoURL:USER_AVATAR
      }).then(() => {
        // Profile updated!
        const {uid,displayName,photoURL,email}=auth.currentUser;
        dispatch(addUser(
            {uid:uid,
            displayName:displayName,
            email:email,
            photoURL:photoURL}
        ))
        // navigate('/');
        // setIsSignInForm(true)

     
   

      }).catch((error) => {
        // An error occurred
        // ...
      });

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    
  });

}
else{
    //Sign In
// setLoader(true);
    signInWithEmailAndPassword(auth,email?.current?.value, password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    setLoader(true);

          setTimeout(() => {
            
            setLoader(false);
          
          }, 2700); // 2 seconds delay
        
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });


}


}

    return(
        <div >
            
                {loader && <div className="absolute z-20 bg-black w-screen h-screen flex justify-center"> <img className="absolute z-30 " src="/img/netflix-gif-intro.gif"/></div>
                  }
                {/* {loader && <img className="absolute z-30 w-screen h-screen" src="https://i.pinimg.com/originals/9a/02/aa/9a02aac51ed499e01518ac73dd954eb1.gif"/>} */}
            
              <Header/>
              <div className="absolute">
              <img src={BG_URL} alt="login-bg"/>
              </div>

              <form onSubmit={(e)=>e.preventDefault()} 
              className=" w-[80%] md:w-6/12 lg:w-4/12 xl:w-3/12 sm:w-9/12 bg-opacity-80 my-36 right-0 left-0 mx-auto absolute bg-black p-10 text-white" >
              <h1 className="font-bold p-3 text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
              {
              !isSignInForm && (<input type="text" ref={name} placeholder="Full Name" className="bg-gray-700 p-3 my-2 w-full rounded-sm"/>)
              }
                <input ref={email} type="text" placeholder="Email Address" className="bg-gray-700 p-3 my-2 w-full rounded-sm"/>
                <input ref={password} type="password" placeholder="Password" className="bg-gray-700 p-3 my-2 w-full rounded-sm"/>
                <p className="text-red-500">{errorMessage}</p>
                {/* {errorMessage && <Toast errMsg={errorMessage}/>} */}
                
                <button className="p-3 my-4 bg-red-700 w-full rounded-sm" 
                onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className="py-5 cursor-pointer"
                 onClick={toggleSignInForm}>{!isSignInForm ? 'Already registered? Sign In' : 'New to Netflix? Sign Up'}
                 </p>
              </form>
        </div>
    )
}
export default Login;