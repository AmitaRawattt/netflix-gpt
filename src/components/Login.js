import { useState } from "react";
import Header from "./Header";
const Login=()=>{
 const [isSignInForm,setIsSignInForm]=useState(true)   
const toggleSignInForm=()=>{
 setIsSignInForm(!isSignInForm);
}

    return(
        <div >
              <Header/>
              <div className="absolute">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg" alt="login-bg"/>
              </div>

              <form className="w-3/12 bg-opacity-80 my-36 right-0 left-0 mx-auto absolute bg-black p-10 text-white" >
              <h1 className="font-bold p-3 text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
              {
              !isSignInForm && (<input type="text" placeholder="Full Name" className="bg-gray-700 p-3 my-2 w-full rounded-sm"/>)
              }
                <input type="text" placeholder="Email Address" className="bg-gray-700 p-3 my-2 w-full rounded-sm"/>
                <input type="password" placeholder="Password" className="bg-gray-700 p-3 my-2 w-full rounded-sm"/>
                <button className="p-3 my-4 bg-red-700 w-full rounded-sm">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="py-5 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'Already registered? Sign In' : 'New to Netflix? Sign Up'}</p>
              </form>
        </div>
    )
}
export default Login;