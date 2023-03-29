function Footer() {
  return (
    <footer className="page-footer blue darken-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/d-art3m/react-movies"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
