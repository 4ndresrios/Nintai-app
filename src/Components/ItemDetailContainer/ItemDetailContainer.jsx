import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {db} from "../../utils/firebase"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [item, setItem] = useState({});

    /* const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const item = data.find((item) => item.id === parseInt(id));
                resolve(item)
            }, 2000)
        })
    } */
    useEffect(() => {
        const getData = async()=>{
            const query = doc(db,"Items", productId);
            const response = await getDoc(query);
            const newProduct = {
                ...response.data(),
                id: response.id }
        setItem(newProduct)
    }
    getData()
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