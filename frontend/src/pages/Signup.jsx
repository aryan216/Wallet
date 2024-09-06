import { Heading } from "../Components/Heading"
import {Subheading} from "../Components/Subheading"
import { Inputbox } from "../Components/Inputbox"
import { Note } from "../Components/Note"
import { useState } from "react"
import axios from "axios";
export function Signup(){
    const [firstName,setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    return(
        <div className="bg-slate-600 h-screen flex justify-center ">
           <div className="flex flex-col justify-center">
               <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}/>
                    <Subheading label={"Enter the information needed to sign up"}/>
                    <Inputbox onchange={e=>{setFirstName(e.target.value)}} label={"First Name"} placeholder={"Enter your First Name"}/>
                    <Inputbox onchange={e=>{setLastName(e.target.value)}}label={"Last Name"} placeholder={"Enter your Last Name"}/>
                    <Inputbox onchange={e=>{setUsername(e.target.value)}}label={"Email"} placeholder={"Enter your Email"}/>
                    <Inputbox onchange={e=>{setPassword(e.target.value)}} label={"Password"} placeholder={"Enter your Password"}/>
                    <div className="pt-6">
                    <button onClick={async()=>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            password,
                            firstName,
                            lastName
                        })
                        localStorage.setItem("token",response.data.token)
                    }} className="focus:outline-none text-white w-full bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sign Up</button>                 
                    </div>
                    <Note label={"Already have an account?"} buttontext={"sign in"} to={"/Signin"} />
               </div>
               
           </div>
        </div>
    )
}

