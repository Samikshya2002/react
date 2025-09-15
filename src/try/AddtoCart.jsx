import { useActionState } from "react";
import addToCart from "./action";

function AddToCartForm({itemID,itemTitle}){
    const [formState,formAction] = useActionState(addToCart, {});
    return(
        <form action={formAction}>
            <h2>{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button type="submit">Add to cart</button>
            {formState?.success &&
                <div className="done">
                    Added to cart! You have now {formState.cartsize} items in your cart.
                </div>
            }
            {formState?. success === false && 
            <div className="error">
                Failed!{formState.message};
            </div>
            }
        </form>
    )
}

export default function AddToCart(){
    return(
        <>
        <AddToCartForm itemID="1" itemTitle ="Laptop"/>
        <AddToCartForm itemID="2"itemTitle ="Smartphone"/>
        </>
    )
}
