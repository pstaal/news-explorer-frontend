import Nav from '../Navigation/Nav';
import './Header.css';

function Header() {
    return (
      <div className="header">
        <h2 className="header__logo">NewsExplorer</h2>
        <Nav />
      </div>
    )
  }
  
  export default Header;