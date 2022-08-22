import logo from "../../logo.svg";

const NavBar = () => {
    return (
        <div>
            <div>
                <img width={'100px'} src={logo} alt="logo"></img>
            </div>
            <div>
                <h1>RPGStore</h1>
            </div>
            <div>
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
            <div>
                <button>login</button>
            </div>
        </div>
    );
};

export default NavBar;