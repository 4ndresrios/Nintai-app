import "./Item.css";
import {Link} from 'react-router-dom';

const Item = ({id, name, description, price, image, stock})=>{
    


    return (
        
        <div className="tarjeta">
            <img className="imgItem" src={image} alt={name} />
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
            <p className="price">${price}</p> 
            <Link to={`/item/${id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    );
};

export default Item;