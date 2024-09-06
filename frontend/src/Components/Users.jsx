import { useEffect, useState } from "react"

import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [value,setValue] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+value)
            .then(response => {
                console.log("API response:", response.data);
                setUsers(response.data.users)
            })
    }, [value])
    console.log(value)

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
      
        <div className="my-2">
            <input onChange={(e) => {
                setValue(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
        {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                        <User key={user._id} user={user} />
                    ))
                ) : (
                    <div>No users found</div>
                )} 
        </div>
    </> 
}

function User({user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
        <button onClick={(e) => {
                navigate("/transfer?id=" + user._id + "&name=" + user.firstName);
            }} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Send Money</button>
        </div>
    </div>
}