import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import "../styles/navbar.css"

const NavBar = () => {

  const style = { display: "block", textDecoration: "none", color: "white" };

  return(
    <nav className="navbar-wrapper">
      <IconContext.Provider value={{color: "white"}}>
      <ul 
        className="links"
        style={{display: "flex", flexFlow: "row, nowrap"}}
      >
        <li key="1" style={{display: "block"}}>
          <Link to="/fraud" style={style}>
            <BiError size={50} />
          </Link>
          Fraud
        </li>
        <li key="2" style={{display: "block"}} >
          <Link to="/education" style={style}>
            <IoBookSharp size={40} />
          </Link>
          Education
        </li>
        <li key="2" style={{display: "block"}}>
          <Link style={style} to="/Profile">
            <IoMdPerson size={40} />
          </Link>
          Profile
        </li>
      </ul>
      </IconContext.Provider>
    </nav>
  );
}

export default NavBar;