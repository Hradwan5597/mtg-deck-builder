import "./Modal.css";
import ShoppingCart from "./ShoppingCart.js";
import BrowseCard from "./BrowseCard.js"
import Checkout from "./Checkout.js";

const Modal = (props) =>
{
 
  return (
    <div className="Modal" onClick={props.onModalClick}>

      <div className="modal-content-wrapper">

        {props.modalContents === "shopping-cart" && 
        <ShoppingCart 
          cartItems={props.cartItems}
          removeCartItemAtIndex={props.removeCartItemAtIndex} 
          onCheckout={props.onCheckout}/>}

        {props.modalContents === "browse-card" && 
        <BrowseCard 
          selectedCardImage={props.selectedCard.cardImage} 
          onAddCardToCart={props.onAddCardToCart} 
          onSelectCardQuantity={props.onSelectCardQuantity} />}

        {props.modalContents === "checkout" && 
          <Checkout 
          stripeObject={props.stripeObject} 
          initiateStripe={props.initiateStripe}/>
        }
        
        {props.modalContents === "" && <></>}

      </div>
    </div>
  )
}

export default Modal;