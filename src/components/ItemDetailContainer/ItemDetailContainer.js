import { useState, useEffect } from "react";
import data from '../mock-data';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({prop})=>{
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data); 
        }, 2000);
    })

    useEffect(() => {
        getData.then((result)=>{
            setItems(result);
            console.log(result);
        })
    }, [])
    return(
        <div>
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer;