import ItemCount from "./ItemCount";

const ItemListContainer = ({prop})=>{
    return(
        <div>
            {prop}
            <ItemCount stock="10" initial={1}/>
        </div>
    )
}

export default ItemListContainer;