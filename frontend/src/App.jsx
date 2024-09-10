import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin";
import { Transfer } from "./pages/Transfer";
import { Dashboard } from "./pages/Dashboard";
import {Home} from "./pages/Home";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>

            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Transfer" element={<Transfer/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
