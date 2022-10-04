import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import "./ItemDetail.css";


const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);
    
    const {id, name, description, price, image, stock} = item;

    const onAdd =(quantity)=> {
        setContador(quantity)
        addItem(item, quantity)
        
    }

    return (
         <div className="detailTarjeta">
            <div>
                <img className='imageDetail' src={image} alt={name} />
            </div>
            <div className='textDetail'>
                <h1 className='h1Detail'>{name}</h1>
                <p className='pDeatail'>{description}</p>
                <p className='pDeatail'>${price}</p>
                <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    );
};

export default ItemDetail;