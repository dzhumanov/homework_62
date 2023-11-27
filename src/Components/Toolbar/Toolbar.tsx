import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-main">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to={"/"}>
          <img src="/F1.svg.png" className="logo" alt="" />
          <br />
          Formula 1
        </NavLink>
        <div className="d-flex">
          <NavLink className="nav-link text-white me-5" to="/drivers">
            Drivers
          </NavLink>
          <NavLink className="nav-link text-white me-5" to="/champion">
            Champion
          </NavLink>
          <NavLink className="nav-link text-white" to="/calendar">
            2023 Calendar
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
