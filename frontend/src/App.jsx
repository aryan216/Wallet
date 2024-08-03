import {BrowserRouter,Routes,Route} from "react-router-dom";


import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import {Dashboard} from "./pages/Dashboard"
import {Transfer} from "./pages/Transfer"


function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Transfer" element={<Transfer/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
