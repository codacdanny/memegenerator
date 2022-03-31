import logo from "../images/meme2.png";

const NavBar = () => {
  return (
    //build the header nav
    <nav>
      <div className=" logo-right">
        <img src={logo} alt="meme logo" className="logo-image" />
        <p className="logo-text">meme generator</p>
      </div>
      <div className="logo-title">REact Meme project</div>
    </nav>
  );
};

export default NavBar;
