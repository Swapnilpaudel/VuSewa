import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>VuSewa</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">Listings</Link>
      </div>
      <div className="right">
        <span>
          <Link to="/signin">Sign in</Link>
          <Link to="/register" className="register">
            Sign up
          </Link>
        </span>

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/list">Listings</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
