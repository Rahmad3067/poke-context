import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"




const Navbar = () => {
  return (
          <nav className="navbar navbar-dark bg-dark d-flex flex-row justify-content-start">
            <NavLink className='p-2 link-a' to="/">Home</NavLink>
            <NavLink className='p-2 link-a' to="/login">Login</NavLink>
          </nav>
        )
}
export default Navbar;