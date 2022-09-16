import { useState, useEffect } from "react";
import data from '../mock-data';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({ prop }) => {
    const {productId} = useParams();

    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        setIsLoading(true);
        const sarasa = async() => {
            await getData.then((result) => {
                console.log(result.find(itemsd=>itemsd.id === parseInt(productId)))
                setItem(result.find(itemsd=>itemsd.id === parseInt(productId)));
            })
            setIsLoading(false);
        }
        sarasa();
        
    }, [])

    
    return (
        <div>
            {isLoading ? <p>loading</p> : <ItemDetail item={item}/>}
        </div>
    )
}


export default ItemDetailContainer;