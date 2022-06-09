import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Nav } from 'react-bootstrap';
import Nave from './Components/Home/Nave';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Nave></Nave>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>


      </Routes>
    </div>
  );
}

export default App;
