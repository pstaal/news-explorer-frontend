import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav({isSavedArticlesUrl}) {

    const removeMobileStyling = () => {
        document.querySelector('.header').classList.remove('header__menu-active');
        document.querySelector('.overlay').classList.remove('header__menu-active');
    };

    return (
     <nav>
        <ul className={`nav ${isSavedArticlesUrl ? 'nav-black' : ''}`}>
            <NavLink to={'/saved-news'} onClick={removeMobileStyling} className={({ isActive }) => "nav__item" + (isSavedArticlesUrl ? ' nav-black' : '') + (isActive ? " nav__item-active" : "")}>Saved articles</NavLink>
            <NavLink to={'/'} onClick={removeMobileStyling} className={({ isActive }) => "nav__item" + (isSavedArticlesUrl ? ' nav-black' : '') + (isActive ? " nav__item-active" : "")}>Home</NavLink>
            <li className={`nav__button ${isSavedArticlesUrl? 'nav-black' : ''}`}>Sign in</li>
        </ul>
      </nav>
    )
  }
  
  export default Nav;