//here goes the imports
import "./QtyPicker.css"
import { useState } from "react"

//here goes the logic

function QuantityPicker ()
{
   const [quantity, setQuantity]=useState (1);
   function decrease()
   {
    let val = quantity - 1;
    setQuantity(val);
    console.log(quantity);
  
   } 

    return (
    <div>
        <button className="btnDecrease" onClick={decrease}> - </button>
        <label>{quantity}</label>
        <button className="btnIncrease"> + </button>
       {console.log("clicked")}
    </div>     
        
    )
}


//here goes the export
export default QuantityPicker;