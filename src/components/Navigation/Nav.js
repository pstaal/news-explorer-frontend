import './Nav.css';

function Nav() {
    return (
     <nav>
        <ul className="nav">
            <li className="nav__item">Home</li>
            <li className="nav__button">Sign in</li>
            <div className="nav__hamburger">
                <span className="nav__hamburger-bar"></span>
                <span className="nav__hamburger-bar"></span>
            </div>
        </ul>
      </nav>
    )
  }
  
  export default Nav;