import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import rubban from "../images/header-rubban2.png";


const MainContainer = ( {children} ) => {
    return (
        <div className="main">
        <img src={rubban} alt="rubban" className="rubban" />
        <header className="navbar-all">
          <Link to="/">
            <h1 className="main-title">Moovice</h1>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <nav className="nav">
            <Link to="/weekly">
              <p className="nav-link">Weekly</p>
            </Link>
            <Link to="/popular">
              <p className="nav-link">Popular</p>
            </Link>
            <Link to="/favorites">
              <p className="nav-link">Favorites</p>
            </Link>
          </nav>
        </header>
        {children}
      </div>
    );
  };
  
  export default MainContainer;
  