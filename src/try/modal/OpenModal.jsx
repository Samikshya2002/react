import { useState ,useActionState} from "react";
import Modal from "./modal";
import addToCart from "../action";

function OpenModal({itemID,itemTitle}){
    const [show,setShow]= useState(false);
    const[formState,formAction] = useActionState(addToCart,{});
    return(
        <>
        <button onClick={()=>setShow(true)}>Open</button>
        <Modal isOpen={show}>
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
        <button onClick={()=>{setShow(false);}}>Close</button>
        </Modal>
        </>
    )
}

export default function OpenModalform(){
    return(
        <>
        <OpenModal itemID="1" itemTitle="Laptop"/>
        <OpenModal itemID="2" itemTitle="Mac"/>
        </>
    )
}