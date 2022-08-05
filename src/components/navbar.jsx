import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import burgerlogo from '../images/burger-logo.png';

const NavBar = () => {
  const navigation = useNavigate();
  const handleLogout = e => {
    localStorage.removeItem("name");
    alert('successfully logged out');
    navigation("/signin", { replace: true })
  };


  return ( <div className='row'><div className='nav-color'> <div className='m-2 left'><a href='./'><img  src={burgerlogo} alt="" width="50" height="50" /></a></div> {(JSON.parse(localStorage.getItem("name")) === "umair") ? <button className='btn right' onClick={handleLogout}>Log out</button> : <Link className='btn right' to="/signin">Sign in</Link>} </div></div> );
}

export default NavBar;
