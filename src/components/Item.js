import { Link } from "react-router-dom";


function Item({item}) {

    return(
        <div className="item">
            <h3>{item.title}</h3>
            <img width={100} height={100} src={item.pictureUrl}></img>
            <p className="precio">Precio: {item.price}</p>
            <Link to={`/details/${item.id}`}><button>Ver detalle del producto</button></Link>
            
            <p className="stock">Stock disponible: {item.stock}</p>
        </div>
    )

}

export default Item;