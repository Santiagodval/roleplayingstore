import React,{Component, useState} from "react";


function ItemCount({stock, initial, onAdd}){

    let[counter, setCounter] = useState(initial)

    return(
        <div className="contador">
            <h4>Camisa de tigre</h4>
            <button id="subtract" onClick={() => setCounter(counter>1 ? counter-1 : counter)}>-</button>
            <div className="counter">{counter}</div>
            <button id="add" onClick={()=>setCounter(counter<stock ? counter+1 : counter)}>+</button>
            <button className="addButton">Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;