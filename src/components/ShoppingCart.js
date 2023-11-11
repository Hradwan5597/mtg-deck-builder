import "./ShoppingCart.css"
import ListView from "./ListView";

const ShoppingCart = (props) => 
{

    return (
        <div className="ShoppingCart">
            <ListView 
                listViewContents={props.cartItems} 
                listViewType="shopping-cart"
                removeCartItemAtIndex={props.removeCartItemAtIndex}
            />

            {/* Add controls to component for checkout button */}
            <button id="checkout-button" onClick={props.onCheckout}>Checkout</button>
        </div>
    );
}

export default ShoppingCart;