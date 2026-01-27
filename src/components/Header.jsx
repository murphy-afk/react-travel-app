import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            BooRoad
          </Link>
        </div>
      </nav>
    </header>
  );
}
