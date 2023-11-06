import "./BrowseCard.css"

const BrowseCard = (props) => 
{
    return (
        <div className="BrowseCard">
            <div className="browsecard-image-wrapper">
                <img id="card-image" src={props.selectedCardImage} alt="card-image" />
            </div>

            <div className="browsecard-controls">
                <select id="selectCardAmount" tabIndex={0} onClick={props.onSelectCardQuantity}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
                <button onClick={props.onAddCardToCart} id="add">Add to Cart</button>
                <button onClick={props.onModalClick} id="cancel">Cancel</button>
            </div>
        </div>
    )
}

export default BrowseCard;