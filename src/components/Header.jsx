import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky-top shadow-lg" style={{ zIndex: 1050 }}>
      <nav
        className="navbar navbar-expand-lg py-3"
        style={{
          backgroundColor: "#0f172a",
          backdropFilter: "blur(10px)",
          borderBottom: "2px solid rgba(168, 85, 247, 0.3)",
        }}
      >
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div
              className="rounded-3 p-1 me-2 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              }}
            >
              <div className="bg-dark rounded-2 px-2 py-1">
                <i className="bi bi-rocket-takeoff-fill text-white"></i>
              </div>
            </div>
            <span
              className="fw-black fs-3 tracking-tighter"
              style={{
                background: "linear-gradient(to right, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "900",
              }}
            >
              BOOROAD
            </span>
          </Link>

          <button
            className="navbar-toggler border-0 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBooRoad"
            style={{ filter: "invert(1)" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navBooRoad">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-lg-4">
                <Link
                  className="nav-link fw-bold text-light opacity-75 hover-opacity-100 transition-all"
                  style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
                  to="/"
                >
                  ESPLORA
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="btn px-4 py-2 fw-bold text-white border-0 shadow-glow rounded-pill d-flex align-items-center"
                  style={{
                    background: "linear-gradient(45deg, #a855f7, #ec4899)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  to="/addtrips"
                >
                  <i className="bi bi-plus-lg me-2"></i>
                  ORGANIZZA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
