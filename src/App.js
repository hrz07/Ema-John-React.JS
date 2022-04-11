import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={ <Shop/>}></Route>
        <Route path='/order' element={ <Order/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
