import logo from "../images/meme2.png";
import { DiGithubBadge } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const pathname = window.location.pathname;

  return (
    //build the header nav
    <nav>
      <Link
        to="https://github.com/codacdanny/memegenerator.git"
        className="github"
      >
        <div className=" logo-right">
          <img src={logo} alt="meme logo" className="logo-image" />
          <h1 className="logo-text">
            Mememify <DiGithubBadge />
          </h1>
        </div>
      </Link>
      <div>
        {pathname === "/" ? (
          <></>
        ) : (
          <button onClick={() => navigate("/")} className="home">
            Home
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
