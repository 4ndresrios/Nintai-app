import data from "./mock-detail"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const getData = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000)
    });
    useEffect(() => {
        getData.then((result)=>{
            setItem(result);
            console.log(result)
        })
    }, []);

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