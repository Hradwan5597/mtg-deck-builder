import "./Modal.css";
import ShoppingCart from "./ShoppingCart.js";
import BrowseCard from "./BrowseCard.js"

const Modal = (props) =>
{
 
  return (
    <div className="Modal" onClick={props.onModalClick}>

      <div className="modal-content-wrapper">

        {props.modalContents === "shopping-cart" && 
        <ShoppingCart 
          cartItems={props.cartItems}
          removeCartItemAtIndex={props.removeCartItemAtIndex} />}

        {props.modalContents === "browse-card" && <BrowseCard selectedCardImage={props.selectedCard.cardImage} onAddCardToCart={props.onAddCardToCart} onSelectCardQuantity={props.onSelectCardQuantity} />}

        {props.modalContents === "" && <></>}

      </div>
    </div>
  )
}

export default Modal;