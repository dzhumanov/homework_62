import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-main">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src="/F1.svg.png" className="logo " alt="" />
          <br />
          Formula 1
        </Link>
        <Link className="nav-link" to='/drivers'>Drivers</Link>
      </div>
    </nav>
  );
};

export default Toolbar;
