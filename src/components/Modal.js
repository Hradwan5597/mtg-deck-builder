import "./Modal.css";

const Modal = (props) =>
{
  return (
    <div className="Modal" onClick={props.onModalClick}>

      <div className="image-wrapper">
        <img id="card-image-modal" src={props.selectedCardImage} alt="card-image" />
      </div>
    </div>
  )
}

export default Modal;