import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import data from './mock-data';
import ItemList from "./ItemList";

const ItemListContainer = ({prop})=>{
    const [items, setItems] = useState(data);

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
            {prop}
            <ItemCount stock="10" initial={1}/>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;