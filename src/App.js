import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Products from './Components/Products';
import Quicklinks from './Components/Quicklinks';
import Footer from './Components/Footer';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Products/>
      <Quicklinks />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
