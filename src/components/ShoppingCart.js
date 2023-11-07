import "./ShoppingCart.css"
import ListView from "./ListView";

const ShoppingCart = (props) => 
{
    return (
        <div className="ShoppingCart">
            <ListView listViewContents={props.cartItems} listViewType="shopping-cart"/>
        </div>
    );
}

export default ShoppingCart;