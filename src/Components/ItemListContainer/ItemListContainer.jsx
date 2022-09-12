import data from "../../services/mock-data"
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000)
    });
    useEffect(() => {
        getData.then(resultado=>{
            if(categoryId){
                const newProducts = resultado.filter(item=>item.categoria === categoryId);
                setItems(newProducts)
            } else{
                setItems(resultado)
            }
        })
    },[categoryId])

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