import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav({isSavedArticlesUrl}) {

    return (
     <nav>
        <ul className={`nav ${isSavedArticlesUrl ? 'nav-black' : ''}`}>
            <NavLink to={'/saved-news'} className={({ isActive }) => "nav__item" + (isSavedArticlesUrl ? ' nav-black' : '') + (isActive ? " nav__item-active" : "")}>Saved articles</NavLink>
            <NavLink to={'/'} className={({ isActive }) => "nav__item" + (isSavedArticlesUrl ? ' nav-black' : '') + (isActive ? " nav__item-active" : "")}>Home</NavLink>
            <li className={`nav__button ${isSavedArticlesUrl? 'nav-black' : ''}`}>Sign in</li>
        </ul>
      </nav>
    )
  }
  
  export default Nav;