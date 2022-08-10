import logo from "../images/meme2.png";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    //build the header nav
    <nav>
      <div className=" logo-right">
        <img src={logo} alt="meme logo" className="logo-image" />
        <h1 className="logo-text">Mememify</h1>
      </div>
      <div>
        <Link
          to="https://github.com/codacdanny/memegenerator.git"
          className="github"
        >
          <p>Github</p>
          <DiGithubBadge />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
