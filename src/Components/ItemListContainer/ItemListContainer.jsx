import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom';
import {db} from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        if(!categoryId){
            const queryRef = collection(db, "Items");
            getDocs(queryRef).then(response=>{
                const productos = response.docs.map(doc =>{
                    const newProducts = {
                        id: doc.id,
                        ...doc.data()
                    }
                    return newProducts
                });
                setItems(productos);
            })
        } else {
            const queryRef = query(collection(db, "Items"),where("categoria", "==", categoryId));
            getDocs(queryRef).then(response=>{
                const productos = response.docs.map(doc =>{
                    const newProducts = {
                        id: doc.id,
                        ...doc.data()
                    }
                    return newProducts
                });
                setItems(productos);
            })
        }
        
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