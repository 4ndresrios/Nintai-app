import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item})=>{

    const {id, name, description, price, image, stock} = item;

    const onAdd =(quantity)=> {
        console.log('Items added to cart: ', quantity);
    }

    return (
         <div>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} initial="0" onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetail;