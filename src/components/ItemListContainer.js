import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import data from './mock-data';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({prop})=>{
    const {categoryId} = useParams();

    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data); 
        }, 2000);
    })

    useEffect(() => {
        getData.then((result)=>{
            if(categoryId){
                const newProducts = result.filter(item=>item.type === categoryId)
                setItems(newProducts);
            }else{
                setItems(result);
            }
            
            
        })
    }, [categoryId])
    return(
        <div>
            {/* {prop} */}
            {/* <ItemCount stock="10" initial={1}/> */}
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;