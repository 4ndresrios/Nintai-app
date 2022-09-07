import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item})=>{

    const {id, name, description, price, image, stock} = item;

    const onAdd =(quantity)=> {
        console.log('Items added to cart: ', quantity);
    }

    return (
         <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <ItemCount stock={stock} initial="0" onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetail;