import "./Modal.css";

const Modal = (props) =>
{
  return (
    <div className="Modal" onClick={props.onModalClick}>

      <div className="modal-content-wrapper">
        <img id="card-image-modal" src={props.selectedCardImage} alt="card-image" />
        <div className="modal-controls">
          <button>Add to Cart</button> <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;