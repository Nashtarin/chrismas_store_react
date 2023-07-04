
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Contact from './pages/Contact';


import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
 <AuthProvider>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
       
      </Routes>
      <Footer></Footer>
    
    </BrowserRouter>
    </AuthProvider>
   
  );
}

export default App;
