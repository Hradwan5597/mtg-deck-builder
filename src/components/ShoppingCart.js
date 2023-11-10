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
        </div>
    );
}

export default ShoppingCart;