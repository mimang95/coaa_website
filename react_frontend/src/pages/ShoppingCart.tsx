import React, {useState} from "react";
import ItemShoppingCart from "../Components/ItemShoppingCart/ItemShoppingCart";

export default function ShoppingCart(props: any){
    
    const [cart, setCart] = useState<any>([])
    const addToCart = (item:any) =>{
        setCart([...cart, item])
    }
    return(
        <>
            <h1>Mein Warenkorb</h1>
            <ItemShoppingCart price={props.price}/>
            <ul>
                {cart.map((item: any) =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={() =>addToCart('Artikel 1')}>Artikel 1 hinzufügen</button>
        </>
    )
}