import Item from "./Item";


function ItemList({items}){
    
    return(
        <div className="ItemList">
            {items.map((producto)=>{
                return(
                    <Item
                    item={producto}
                    />
                );
            })}
        </div>
    )
};

export default ItemList;