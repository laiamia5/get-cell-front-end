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
import Profile from './components/Profile';
import Registro from './components/sections/Registro';
import IniciarSesion from './components/sections/IniciarSesion'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generarToken } from './redux/actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let sesion_storage = sessionStorage.getItem('usuario')
    sesion_storage  && dispatch(generarToken(sesion_storage))
  },[])
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
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/inicio-sesion' element={<IniciarSesion/>}/>
        <Route path='/perfil' element={<Profile/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
