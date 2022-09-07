
function Item({title,pictureUrl,price,stock}) {

    return(
        <div>
            <h3>{title}</h3>
            <img width={100} height={100} src={pictureUrl}></img>
            <p>Precio: {price}</p>
            <button>Ver detalle del producto</button>
            <p>Stock disponible: {stock}</p>
        </div>
    )

}

export default Item;