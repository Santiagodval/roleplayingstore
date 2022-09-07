import Item from "../Item";

function ItemDetail({ items }) {
    return (
        <div className="ItemDetail">
            <Item
                title={items[1].title}
                id={items[1].id}
                pictureUrl={items[1].pictureUrl}
                price={items[1].price}
                stock={items[1].stock}
            />
        </div>
    );
};

export default ItemDetail;