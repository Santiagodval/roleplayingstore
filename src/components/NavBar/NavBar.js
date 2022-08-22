import logo from "../../logo.svg";
import './styles.css';

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div className="navBar-logo">
                <img width={'100px'} src={logo} alt="logo"></img>
            </div>
            <div className="navBar-brand">
                <h1>RPGStore</h1>
            </div>
            <div className="navBar-list">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
            <div className="navBar-login">
                <button>login</button>
            </div>
        </div>
    );
};

export default NavBar;