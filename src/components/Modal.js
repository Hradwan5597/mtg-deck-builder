import "./Modal.css";

const Modal = (props) =>
{
  return (
    <div className="Modal" onClick={props.onModalClick}>

      <div className="modal-content-wrapper">
        <div className="modal-image-wrapper">
          <img id="card-image-modal" src={props.selectedCardImage} alt="card-image" />
        </div>
        <div className="modal-controls">
          <button id="add">Add to Cart</button> <button id="cancel">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;