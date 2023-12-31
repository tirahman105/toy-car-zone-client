import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleaddNewToyNav = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please log in first to add a new toy!",
        showConfirmButton: false,
        timer: 2000
       
      
      })
  
    }
  };

  const navItems = (
    <>
      <li className="text-orange-700">
        <Link to="/">Home</Link>
      </li>
      <li className="text-orange-700">
        <Link to="/alltoys">All Toys</Link>
      </li>
      <li className="text-orange-700">
        <Link onClick={handleaddNewToyNav} to="/addtoy">
          Add New Toy
        </Link>
      </li>
      {user ? (
        <li className="text-orange-700">
          <Link to="/mytoys">My Toys</Link>
        </li>
      ) : (
        ""
      )}
      <li className="text-orange-700">
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
   

    <div className="navbar bg-[#FDEEDC] h-32">
  <div className="navbar-start max-w-7xl mx-auto">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
      >
        {navItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
      <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navItems}</ul>
  </div>
  <div className="navbar-end">
    {user?.email ? (
      <>
        <div className="avatar placeholder">
          <div className=" bg-neutral-focus text-neutral-content rounded-full w-8">
            <img
              src={user?.photoURL}
              title={user.displayName}
              alt="User image"
            />
          </div>
        </div>
        <button onClick={handleLogOut} className="btn ml-2">
          Logout
        </button>
      </>
    ) : (
      <>
        <button className="btn bg-[#D36F3F] hover:bg-blue-700 border-0 ml-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn ml-2 border-0 bg-[#D36F3F] hover:bg-blue-700 text-white font-bold">
          <Link to="/register">Register</Link>
        </button>
      </>
    )}
  </div>
</div>
  );
};

export default Navbar;
