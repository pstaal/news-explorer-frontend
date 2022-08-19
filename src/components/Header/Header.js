import Nav from '../Navigation/Nav';
import './Header.css';
import { useLocation } from 'react-router-dom';

function Header() {

    const openMobileMenu = () => {
        document.querySelector('.header').classList.toggle('header__menu-active');
        document.querySelector('.overlay').classList.toggle('header__menu-active');
    };

    const location = useLocation();
    const whiteBackground = location.pathname === '/saved-news';

    return (
      <div className={`header ${whiteBackground ? 'header-black' : ''}`}>
        <div className={`header__wrapper ${whiteBackground ? 'header-black' : ''}`}>
            <h2 className={`header__logo ${whiteBackground ? 'header-black' : ''}`}>NewsExplorer</h2>
            <div className="header__hamburger" onClick={openMobileMenu}>
                <span className={`header__hamburger-bar ${whiteBackground ? 'header-black' : ''}`}></span>
                <span className={`header__hamburger-bar ${whiteBackground ? 'header-black' : ''}`}></span>
            </div>
        </div>
        <Nav whiteBackground={whiteBackground}/>
      </div>
    )
  }
  
  export default Header;