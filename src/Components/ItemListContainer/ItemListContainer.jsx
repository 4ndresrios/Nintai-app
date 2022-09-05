import data from "./mock-data"
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList";
import "./ItemListContainer.css";


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000)
    });
    useEffect(() => {
        getData.then((result)=>{
            setItems(result);
            console.log(result)
        })
    }, []);

    return(
        <div className="items">
            {items.length>0?(
                 <Itemlist itemsList={items}/>
                ) : (
                    <div>Cargando...</div>
                )}
        </div>
    );
};

export default ItemListContainer