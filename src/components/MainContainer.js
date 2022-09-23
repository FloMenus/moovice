import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import rubban from "../images/header-rubban2.png";

const width = window.innerWidth;
const breakpoint = 768;

const MainContainer = ({ children }) => {
  return (
    <div className="main">
      {width < breakpoint ? (
        <div className="navbar rounded-sm navbar-responsive bg-red-800">
          <div className="flex-1">
            <Link to="/">
              <h1 className="main-title">Moovice</h1>
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li tabIndex={0}>
                <div className="nav-link">
                  Movies
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </div>
                <ul className="p-2 bg-red-700">
                  <li>
                    <Link to="/weekly">
                      <p className="nav-link">Weekly</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/popular">
                      <p className="nav-link">Popular</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/favorites">
                  <p className="nav-link">Favorites</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}

      {children}
    </div>
  );
};

export default MainContainer;
