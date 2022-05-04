import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ color: '#FFF' }}>Home</Link>
          </li>
          <li>
            <Link to="/About" style={{ color: '#FFF' }}>About</Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: '#FFF' }}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
