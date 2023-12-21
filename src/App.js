import './App.css';
import Cartpage from './components/cart/Cartpage';
import CheckOutPage from './components/checkout/checkOutPage';
import Home from './components/home/Home';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import OrderData from './components/orderDetails/orderData';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/checkout' element={<CheckOutPage />} />
        <Route path='/orderdata/:orderid' element={<OrderData />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
