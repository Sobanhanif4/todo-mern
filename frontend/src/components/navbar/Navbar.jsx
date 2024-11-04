import { Link } from "react-router-dom"
import "./Navbar.css"
import { RiContactsBook2Fill } from 'react-icons/ri'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
const Navbar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const logout = () => {
        sessionStorage.clear("id")
        dispatch(authActions.logout());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" to="#"><b>
                        <RiContactsBook2Fill /> todo</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about"> About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/todo"> Todo</Link>
                            </li>
                            {!isLoggedIn && (<><li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signup"> Sign Up</Link>
                            </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link active btn-nav" aria-current="page" to="/signin"> Sign In</Link>
                                </li></>)}

                            {isLoggedIn && (<li className="nav-item mx-2" onClick={logout}>
                                <Link className="nav-link active btn-nav" aria-current="page" to="#"> Log out</Link>
                            </li>)}


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
