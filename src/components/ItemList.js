import Item from "./Item";


function ItemList({items}){
    
    return(
        <>
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
        </>
    )
};

export default ItemList;