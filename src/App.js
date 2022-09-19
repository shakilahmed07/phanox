import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminController from "./pages/Admin Controller/AdminController"
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import CartDataAPI from './cartDataAPI'
import { initialCartData } from './cartDataAPI'
import Error from './Components/Error';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import SignIn from './pages/Singin/SignIn';
import SignUp from './pages/SignUp/SingUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Content from './pages/Admin Controller/AdminDash/content';
import CustomDesign from './pages/Custom/CustomDesign';
import MarketDesign from './pages/MarketDesign/MarketDesign';
import ManageProducts from './pages/Dashboard/ManageProducts';
import PetternDesign from './pages/PetternDesign/PetternDesign';
import {initializeApp} from 'firebase/app';
import firebaseConfig from '../src/Firebase/firebase.config';
import AuthProvider from './Context/AuthProvider'
import Chat from './pages/Chat/Chat'
import Join from './pages/Chat/Join'

const App = () => {
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart_data')) || initialCartData)
  const app = initializeApp(firebaseConfig);
  useEffect(() => {
    localStorage.setItem('cart_data', JSON.stringify(cartData))
  }, [cartData])

  const CartDataAPIValues = {
    cartData,
    setCartData,
  }
  return (
     <AuthProvider>
      <Router>
          <CartDataAPI.Provider value={CartDataAPIValues}>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/admin" element={<AdminController />} />
                  <Route path="/custom" element={<CustomDesign />} />
                  <Route path="/join" element={<Join />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/shop/designs" element={<MarketDesign />} />
                  <Route path="/shop/petterns" element={<PetternDesign />} />
                  <Route path='/dashboard' element={<Dashboard/>}>
                      <Route path='/dashboard/addproducts' element={<Content/>}/>
                      <Route path='/dashboard/manageproducts' element={<ManageProducts/>}/>
                  </Route>
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="*" element={<Error />} />
            </Routes>
          </CartDataAPI.Provider>
        </Router>
     </AuthProvider>
  );
}

export default App;
