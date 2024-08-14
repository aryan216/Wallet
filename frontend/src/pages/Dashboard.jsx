import { Appbar } from "../Components/Appbar";
import {Balance } from "../Components/Balance"
export function Dashboard(){
    return(
        <div>
            <Appbar/>
            <div className="m-8">
                <Balance value={10000}/>
            </div>
        </div>
    )
}