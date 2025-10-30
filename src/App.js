// import logo from './logo.svg';
import { FaSearch } from 'react-icons/fa';
import './App.css';
function App() {
  return (
    <header>
      <div className='whole-app'>
      <section className='top-bar'>
        <div className='top-bar-element'>
        <div className='logo'>
          <img src='./joyeria_image.png' alt='logo_image' />
        </div>
        <div className='top-bar-search'>
          <input className='search-input' type='text' placeholder='Search' />
          <button className='search-button'><FaSearch/></button>
          
        </div>
        <ul id="services" className="offers">
          <li className="Treasure-chest">
            <span className="new-tag">NEW</span>
            <p className='name'>Treasure Chest</p>
          </li>
          <li className="Stores">
            <p className='name'>Stores</p>
          </li>
          <li className="Gold">
            <p className='name'>Gold</p>
          </li>
        </ul>
        </div>
      </section>
      <section className='top-bar-2'>
        <div className='top-bar2-element'>
          <nav id='nav-menu' className='nav-bar'>
          <ul id='products' className='product-type'>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
            <li className='p-1'>Ring</li>
          </ul>
          </nav>
        </div>
      </section>
      </div>
    </header>

  );
}

export default App;
