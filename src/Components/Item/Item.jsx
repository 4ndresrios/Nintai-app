import "./Item.css";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

const Item = ({id, name, description, price, image, stock})=>{
    
    const onAdd =(quantity)=> {
        console.log('Items added to cart: ', quantity);
    }


    return (
        
        <div className="tarjeta">
            <img className="imgItem" src={image} alt={name} />
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
            <p className="price">{price}</p> 
            <Link to={`/item/${id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link> 
            <ItemCount stock={stock} initial="0" onAdd={onAdd}/>
        </div>
    );
};

export default Item;