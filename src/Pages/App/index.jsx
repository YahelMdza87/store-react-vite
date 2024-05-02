import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../../Components/Navbar/index.jsx'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/my-account" element={ <MyAccount/> }/>
        <Route path="/my-order" element={ <MyOrder/> }/>
        <Route path="/my-orders" element={ <MyOrders/> }/>
        <Route path="/*" element={ <NotFound/> }/>
        <Route path="/sign-in" element={ <SignIn/> }/>
      </Routes>
    </BrowserRouter>
        
  )
}

export default App
