import ItemCount from "../ItemCount";
import { useState } from "react";

function ItemDetail( {item} ) {

    const [contador, setContador] = useState(0);

    const onAdd= (counter) =>{
        console.log(counter);
        setContador(counter);
    }

    return (
        <div className="item">
            <h3>{item.title}</h3>
            <img width={100} height={100} src={item.pictureUrl}></img>
            <p className="precio">Precio: {item.price}</p>
            <p className="stock">Stock disponible: {item.stock}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            <h5>{contador}</h5>

        </div>
    );
};

export default ItemDetail;