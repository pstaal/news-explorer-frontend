import Nav from '../Navigation/Nav';
import './Header.css';

function Header() {

    const openMobileMenu = () => {
        document.querySelector('.header').classList.toggle('header__menu-active');
        document.querySelector('.overlay').classList.toggle('header__menu-active');
    };

    return (
      <div className="header">
        <div className="header__wrapper">
            <h2 className="header__logo">NewsExplorer</h2>
            <div className="header__hamburger" onClick={openMobileMenu}>
                <span className="header__hamburger-bar"></span>
                <span className="header__hamburger-bar"></span>
            </div>
        </div>
        <Nav />
      </div>
    )
  }
  
  export default Header;