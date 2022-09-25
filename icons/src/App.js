import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Itemlistcontainer from './components/Itemlistcontainer';
import Inicio from './components/paginas/Inicio'
import Contacto from './components/paginas/Contacto'
import Productos from './components/paginas/Productos'



function App() {
  return (
    <div className="App">

       <Router>
        <Navbar/>
        <Itemlistcontainer
        saludo="Bienvenido a ICONS"
        />
        <Routes>
           <Route path='/' element={<Inicio/>} />
           <Route path='/productos' element={<Productos/>} />
           <Route path='/contacto' element={<Contacto/>} />
        </Routes>
       </Router>

      
    </div>
  );
}

export default App;
