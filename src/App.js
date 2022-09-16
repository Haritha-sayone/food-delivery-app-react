import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './components/Admin/Dashboard';
import AddItems from './components/Admin/AddItems';
import Items from './components/Admin/Items';
import FoodDetails from './pages/FoodDetails';
import EditItems from './components/Admin/EditItems';
import Cart from './components/Cart/Cart';
import EmptyCart from './pages/EmptyCart';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/items/add" element={<AddItems />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/detail/:id" element={<FoodDetails />} />
        <Route path="/items/edit/:id" element={<EditItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/empty" element={<EmptyCart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
