import './styles.css';
import cart from "../../shopping-cart.png"

const CartWidget = () =>{

    return(
        <button className='cartButton'>
            <img width={'50px'} src={cart} alt="cart"></img>
            <div>3</div>
        </button>

    );

};

export default CartWidget;