
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './screens/Home';
import Sale from './screens/Sale';
import Product from './screens/Product';
import Contact from './screens/Contact';

import Shop from './screens/Shop';
import Itemdetail from './components/Itemdetail';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Ordinary from './components/Ordinary';
import Bdyshop from './components/Bdyshop';
import Bthbdy from './components/Bth&bdy';
import Completed from './screens/Completed';
import Favorite from './screens/Favorite';



function App() {
  return (
    <Router>
   
    <Routes>
   <Route exact path="/" element={<Home/>} />
   <Route exact path="/Sale" element={<Sale/>} />
   <Route exact path="/Shop" element={<Shop/>} />
   <Route exact path="/Cart" element={<Cart/>} />
   <Route exact path="/Bdyshop" element={<Bdyshop/>} />
   <Route exact path="/favorite" element={<Favorite/>} />
   <Route exact path="/BthBdy" element={<Bthbdy/>} />
   <Route exact path="/Ordinary" element={<Ordinary/>} />
   <Route exact path="/completed" element={<Completed/>} />
   <Route exact path="/Checkout" element={<Checkout/>} />
   <Route exact path="/item/:id" element={<Itemdetail/>} />
   <Route exact path="/Product" element={<Product/>} />
   <Route exact path="/Contact" element={<Contact/>} />
    </Routes>
    </Router>
  );
}

export default App;
