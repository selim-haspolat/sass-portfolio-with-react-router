import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a to="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a to="/about" className="nav__link nav__link--active">
            About Me
          </a>
        </li>
        <li className="nav__item">
          <a to="/projects" className="nav__link">
            My Projects
          </a>
        </li>
        <li className="nav__item">
          <a to="/contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
