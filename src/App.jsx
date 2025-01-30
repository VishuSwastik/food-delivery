import NavBar from "./components/pages/navbar/NavBar";
import {Route,Routes} from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/footer";
import { useState } from "react";
import Login from "./components/Login/login";
import ReviewComponent from "./components/ReviewComponent/ReviewComponent";
const App =() => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
     

    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
  <div className="app">
    <NavBar setShowLogin={setShowLogin}/>
    <Routes>
   
            
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/review" element={<ReviewComponent/>}></Route>
      <Route path="/Order" element={<PlaceOrder/>}></Route>
    </Routes>
  </div>
   <Footer/>
  </>
  )
}

export default App
