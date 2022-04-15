import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/Login/Login';
import Navbar from './components/navbar/Navbar';
import Notfound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={ <Shop/>}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/about' element={ <About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
