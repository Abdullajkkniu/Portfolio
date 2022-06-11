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
import Photoshot from './Pages/Details/Photoshot';
import Warehouse from './Pages/Details/Warehouse/Warehouse';
import Daylight from './Pages/Details/Daylight';
import LaptopGallery from './Pages/Details/LaptopGallery';
import TechByko from './Pages/Details/TechByko';
import LaptopHouse from './Pages/Details/LaptopHouse';
import PortfolioSlider from './Pages/Portfolio/PortfolioSlider';


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
      <Route path='/photoshot' element={<Photoshot></Photoshot>}></Route>
      <Route path='/warehouse' element={<Warehouse></Warehouse>}></Route>
      <Route path='/daylight' element={<Daylight></Daylight>}></Route>
      <Route path='/laptopgallery' element={<LaptopGallery></LaptopGallery>}></Route>
      <Route path='/techbyko' element={<TechByko></TechByko>}></Route>
      <Route path='/laptophouse' element={<LaptopHouse></LaptopHouse>}></Route>
      <Route path='/slider' element={<PortfolioSlider></PortfolioSlider>}></Route>


      </Routes>
    </div>
  );
}

export default App;
