import { useEffect, useState } from "react"
import axios from "axios";
export function Balance(){
    const [val,setVal]=useState(0);
    useEffect(()=>{
        const fetch=async()=>{
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ5NmY5MGNhMjgyNTg5NzMwZDAwYzEiLCJpYXQiOjE3MjU1MjU5MDR9.UwCqqHrnpL0GoRDNK0GkrvEErd1rtu_jA6neSMYPem4"
                }
            });
    
            setVal(Number(response.data.balance).toFixed(2))
        }
        fetch();

    },[])
    console.log(val)
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {val}
        </div>
    </div>
}