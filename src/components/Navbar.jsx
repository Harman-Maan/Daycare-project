export default function Navbar() {
  return (
    <nav className="navbar fixed-top  navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand brand-name" href="#">
          <img src="./logo/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top img-fluid" /> <span>Daycare</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse w-75" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex ms-auto justify-content-between">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact us
            </a>
          </li>
          <li>
            <div className="d-flex me-3  w-100" height="100px">
              <div className="vr align-self-center"></div>
            </div>
          </li>
          <li>
            <button type="button" className="btn btn-success d-inline">
              Log in
            </button>
            <a className="nav-link d-inline" href="#">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
