import "./Item.css";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, name, description, price, image, stock})=>{
    return (
        <div>
            <img className="imgItem" src={image} alt={name} />
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
            <p className="price">{price}</p>   
            <ItemCount stock={stock} initial="0"/>
        </div>
    );
};

export default Item;