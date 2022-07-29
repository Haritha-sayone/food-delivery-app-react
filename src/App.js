import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
// import About from './pages/About';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { Routes, Route } from 'react-router-dom';

import CreateContainer from './components/Admin/CreateContainer';
import MainContainer from './components/Admin/MainContainer';
// import AdminHome from './components/Admin/AdminHome';

function App() {
  return (
    <div className="App" style={{width:"1279px"}}>
      <Header />

      <Routes>
        {/* Admin section */}
        {/* <Route path="admin" element={<AdminHome />} ></Route> */}
        <Route path="/*" exact element={<MainContainer />} />
        <Route path="/createItem" element={<CreateContainer />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="menu" element={<Menu />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        
        

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
