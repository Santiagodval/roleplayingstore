import React,{Component, useState} from "react";


function ItemCount({stock, initial, onAdd}){

    let[counter, setCounter] = useState(initial)

    const decrementar = ()=>{
        setCounter(counter>1 ? counter-1 : counter);
    }

    const aumentar = () =>{
        setCounter(counter<stock ? counter+1 : counter)
    }

    return(
        <div className="contador">
            <h4>Camisa de tigre</h4>
            <button id="subtract" onClick={decrementar}>-</button>
            <div className="counter">{counter}</div>
            <button id="add" onClick={aumentar}>+</button>
            <button className="addButton" onClick={()=>onAdd(counter)}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;