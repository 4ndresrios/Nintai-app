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
                <button className="buttonContador" onClick={resta}>-</button>
                <h2 className="contadorNumber">{contador}</h2>
                <button className="buttonContador" onClick={suma}>+</button>
            </div>
        </>
    )
}

export default ItemCount;