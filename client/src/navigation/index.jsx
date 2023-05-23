import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess"
import Menu from "../pages/Menu/Menu"



const Navigation = ()=>{
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/payment-success" element={<PaymentSuccess/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;