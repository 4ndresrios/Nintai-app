import data from "../../services/mock-data"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const item = data.find((item) => item.id === parseInt(id));
                resolve(item)
            }, 2000)
        })
    }
    useEffect(() => {
        getItem(productId).then((resultado) => {
            console.log(resultado)
            setItem(resultado)
        })
    },[productId])


    return(
        <div>
            
                 {item ? <ItemDetail item={item}/>
                 : 
                    <div>Cargando...</div>
                }
        </div>
    );
};

export default ItemDetailContainer;