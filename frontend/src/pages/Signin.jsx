import { Heading } from "../Components/Heading"
import {Subheading} from "../Components/Subheading"
import { Inputbox } from "../Components/Inputbox"
import { Note } from "../Components/Note"

export function Signin(){
    return(
        <div className="bg-slate-600 h-screen flex justify-center ">
           <div className="flex flex-col justify-center">
               <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"}/>
                    <Subheading label={"Enter the information needed to sign in"}/>
                    
                    <Inputbox label={"Email"} placeholder={"Enter your Email"}/>
                    <Inputbox label={"Password"} placeholder={"Enter your Password"}/>
                    <div className="pt-6">
                    <button className="focus:outline-none text-white w-full bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sign Up</button>                 
                    </div>
                    <Note label={"Don't have an account?"} buttontext={"sign up"} to={"/Signup"} />
               </div>
               
           </div>
        </div>
    )
}