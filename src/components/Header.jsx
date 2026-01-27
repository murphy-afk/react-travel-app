import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BooRoad
          </Link>
          <Link className="navbar-brand" to="/addtrips">
            Add Trips
          </Link>
        </div>
      </nav>
    </header>
  );
}
