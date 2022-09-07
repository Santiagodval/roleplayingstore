import Item from "./Item";


function ItemList({items}){
    
    return(
        <div className="ItemList">
            {items.map((producto)=>{
                return(
                    <Item
                    title={producto.title}
                    id={producto.id}
                    pictureUrl={producto.pictureUrl}
                    price={producto.price}
                    stock={producto.stock}
                    />
                );
            })}
        </div>
    )
};

export default ItemList;