
function Item({title,pictureUrl,price,stock}) {

    return(
        <div className="item">
            <h3>{title}</h3>
            <img width={100} height={100} src={pictureUrl}></img>
            <p className="precio">Precio: {price}</p>
            <button>Ver detalle del producto</button>
            <p className="stock">Stock disponible: {stock}</p>
        </div>
    )

}

export default Item;