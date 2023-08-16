import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home  from "./components/home";
import Products from './components/products';
import Aproducts from './components/aproducts';
import About from './components/about';
import Aabout from './components/aabout';
// import { inject } from '@vercel/analytics';
import Ahome from './components/ahome.js';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/ar' Component={Ahome}/>
        <Route path='/products' Component={Products}/>
        <Route path='/ar/products' Component={Aproducts}/>
        <Route path='/about' Component={About}/>
        <Route path='/ar/about' Component={Aabout}/>
     </Routes>
    </div>
  );
}

export default App;
