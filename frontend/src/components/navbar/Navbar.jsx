import "./Navbar.css"
import { RiContactsBook2Fill } from 'react-icons/ri'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#"><b>
                        <RiContactsBook2Fill /> todo</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#"> Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#"> About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#"> Todo</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active btn-nav" aria-current="page" href="#"> Sign Up</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active btn-nav" aria-current="page" href="#"> Sign In</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active btn-nav" aria-current="page" href="#"> Log out</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
