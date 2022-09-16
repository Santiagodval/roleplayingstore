
function ItemDetail( {item} ) {

    return (
        <div className="item">
            <h3>{item.title}</h3>
            <img width={100} height={100} src={item.pictureUrl}></img>
            <p className="precio">Precio: {item.price}</p>
            <p className="stock">Stock disponible: {item.stock}</p>
        </div>
    );
};

export default ItemDetail;