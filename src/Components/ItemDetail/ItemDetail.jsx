import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);
    
    const {id, name, description, price, image, stock} = item;

    const onAdd =(quantity)=> {
        setContador(quantity)
        addItem(item, quantity)
        
    }

    return (
         <div className="tarjeta">
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    );
};

export default ItemDetail;