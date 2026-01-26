import { NavLink } from "react-router-dom";

export default function Header () {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink to={"/"}>
            BooRoad
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
