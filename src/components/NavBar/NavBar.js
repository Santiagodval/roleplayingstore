import logo from "../../logo.svg";
import './styles.css';
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

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
                    <NavLink className={({isActive})=>isActive ? "active" : "inactive"} to="/">Home</NavLink>
                    <NavLink className={({isActive})=>isActive ? "active" : "inactive"} to="/products/dices">Dados</NavLink>
                    <NavLink className={({isActive})=>isActive ? "active" : "inactive"} to="/products/minis">Minis</NavLink>
                    <NavLink className={({isActive})=>isActive ? "active" : "inactive"} to="/products/manuals">Manuales</NavLink>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
            <div className="navBar-login">
                <button>login</button>
            </div>
        </div>
    );
};

export default NavBar;