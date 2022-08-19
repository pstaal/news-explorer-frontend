import './Nav.css';

function Nav({whiteBackground}) {

    return (
     <nav>
        <ul className={`nav ${whiteBackground ? 'nav-black' : ''}`}>
            <li className={`nav__item nav__item-active ${whiteBackground ? 'nav-black' : ''}`}>Home</li>
            <li className={`nav__button ${whiteBackground ? 'nav-black' : ''}`}>Sign in</li>
        </ul>
      </nav>
    )
  }
  
  export default Nav;