import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-main">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to={"/"}>
          <img src="/F1.svg.png" className="logo" alt="" />
          <br />
          Formula 1
        </Link>
        <div className="d-flex">
          <Link className="nav-link text-white me-5" to="/drivers">
            Drivers
          </Link>
          <Link className="nav-link text-white" to="/calendar">
            2023 Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
