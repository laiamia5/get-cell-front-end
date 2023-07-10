import logo from './logo.svg';
import './App.css';
import Index from './components/Index'
import Nav from './components/Nax'
import Footer from './components/Footer';
import './styles/fondo.css'
import {Route, Routes} from 'react-router'
import Contacto from './components/Contacto';
import Tienda from './components/Tienda'
import Detalle from './components/Detalle';
import Carrito from './components/Carrito';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App ">
      <ToastContainer/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/detalle/:id' element={<Detalle/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
