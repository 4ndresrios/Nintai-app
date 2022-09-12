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
                const item = data.find(item=>item.id === parseInt(id));
                resolve(item)
            }, 2000)
        })
    }
    useEffect(() => {
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[productId])


    return(
        <div>
            {item.length>0?(
                 <ItemDetail Item={item}/>
                ) : (
                    <div>Cargando...</div>
                )}
        </div>
    );
};

export default ItemDetailContainer;