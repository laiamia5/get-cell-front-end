import logo from './logo.svg';
import './App.css';
import Index from './components/Index'
import Nav from './components/Nax'
import Footer from './components/Footer';
import './styles/fondo.css'
import {Route, Routes} from 'react-router'
import Contacto from './components/Contacto';
import Tienda from './components/Tienda'

function App() {
  return (
    <div className="App ">
      <Nav/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
