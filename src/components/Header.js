import { auth } from "../utils/firebase";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";



const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userInfo=useSelector((store)=>store.user);
    // console.log(userInfo,"UserIfo");
    
    

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
        
          if (user) {
          
            const {uid,displayName,email,photoURL} = user;
            dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
            
            // setTimeout(() => {
                // Navigate after showing the loader
             
                navigate("/browse");
            //   }, 2700);
           
          } 
          else {
           
            // User is signed out
            navigate("/")
            // ...
          }
        });
        return ()=>unsubscribe()
        },[])

const handleSignOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeUser())
       
      }).catch((error) => {
        console.log("sign out error")
      });
}
const handleGptSearch=()=>{
  dispatch(toggleGptSearchView());
}
  return (
    <div className="absolute z-10 w-[100%] px-8 py-2 bg-gradient-to-b from-black flex justify-between">
   
        <img src={LOGO} className="w-44" alt="logo"/>
  { userInfo && (<div className="flex align-center ">
     <button className="py-0 px-2 mx-4 bg-purple-700 text-white w-auto h-12 self-center rounded-md"
     onClick={handleGptSearch} >GPT Search</button>
        <img  alt=" user-icon" className="w-auto h-[45px]  mr-3 self-center" src={userInfo?.photoURL}/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
   </div>)}
    </div>
  )
}

export default Header