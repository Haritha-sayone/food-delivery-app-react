import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
// import About from './pages/About';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import Dashboard from './components/Admin/Dashboard';
import AddItems from './components/Admin/AddItems';
import Items from './components/Admin/Items';
import EditItems from './components/Admin/EditItems';

import { Routes, Route } from 'react-router-dom';

// import CreateContainer from './components/Admin/CreateContainer';
// import MainContainer from './components/Admin/MainContainer';

function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <Header />

      <Routes>
        
        {/* <Route path="/*" exact element={<MainContainer />} />
        <Route path="/createItem" element={<CreateContainer />} /> */}

        <Route path="/" exact element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/items/add" element={<AddItems />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/edit/:id" element={<EditItems />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
