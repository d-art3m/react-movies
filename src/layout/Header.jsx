function Header() {
  return (
    <nav className="blue darken-2">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/d-art3m/react-movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
