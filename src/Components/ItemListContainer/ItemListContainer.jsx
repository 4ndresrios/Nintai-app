import data from "../../services/mock-data"
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom';
import {db} from "../../utils/ItemCollection"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const queryRef = collection(db, "Items");
            const queryFilter= query(queryRef, where("categoria", "==", categoryId))
            const response = await getDocs(queryFilter);
            const productos = response.docs.map(doc =>{
                const newProducts = {
                    ...doc.data(),
                    id: doc.id
                }
                return newProducts

            })
            console.log(productos);
        }
        getData()
    },[categoryId])
    /* const getData = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000)
    }); */
/*     useEffect(() => {
        getData.then(resultado=>{
            if(categoryId){
                const newProducts = resultado.filter(item=>item.categoria === categoryId);
                setItems(newProducts)
            } else{
                setItems(resultado)
            }
        })
    },[categoryId]) */

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