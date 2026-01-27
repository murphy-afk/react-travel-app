import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky-top shadow-lg" style={{ zIndex: 1050 }}>
      <nav
        className="navbar navbar-expand-lg py-3 nav-blur"
      >
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <div
              className="rounded-3 p-1 me-2 shadow-lg diagonal-gradient"
            >
              <div className="bg-dark rounded-2 px-2 py-1">
                <i className="bi bi-rocket-takeoff-fill text-white"></i>
              </div>
            </div>
            <span
              className="fw-black fs-3 tracking-tighter gradient-text-alt"
            >
              BOOROAD
            </span>
          </NavLink>

          <button
            className="navbar-toggler border-0 text-white invert"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBooRoad"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navBooRoad">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-lg-4">
                <NavLink
                  className="btn text-light mb-1 rounded-pill"
                  to="/"
                >
                  ESPLORA
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="btn text-light rounded-pill"
                  to="/addtrips"
                >
                  <i className="bi bi-plus-lg me-2"></i>
                  NUOVI VIAGGI
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
