import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);
        const suma =()=>{
            if (contador < stock) {
            setContador(contador+1)
            }
        }
        const resta =()=>{
            if (contador >= 1) {
            setContador(contador-1)
            }
        }
    return (
        <>
            <div className="contador">
                <button disabled={contador <= 0} className="buttonContador" onClick={resta}>-</button>
                <h2 className="contadorNumber">{contador}</h2>
                <button disabled={contador >= stock} className="buttonContador" onClick={suma}>+</button>  
            </div>
            <div className="contador">
                <button className="buttonAgregar" disabled={stock <=0} onClick={()=>onAdd(contador)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;