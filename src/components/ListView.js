import './ListView.css';

const ListView = (props) => {

    return (
        <div className="ListView"> 
            {props.listViewType==="browse-cards" &&  
            <ul id="ul-browse"> 
                {props.listViewContents.length === 0 ? <p>No results</p> : 
                    props.listViewContents.map((card, index) =>  
                        <li key={index}> {card} </li>)}
            </ul>}
            {props.listViewType==="shopping-cart" &&
            <ul id="ul-shopping">
                {props.listViewContents.length === 0 ? <p>Cart Empty</p> :
                    props.listViewContents.map((cartItem, index) =>
                        <li key={index}>
                            <div className="list-item-conents">
                                <img id="cart-item-image" src={cartItem.cardImage}></img>
                                <p>Product ID: {cartItem.cardId}</p>
                                <p>Qty:{cartItem.quantity}</p>
                            </div>
                            <div className="list-item-controls">
                                <button>Remove</button>
                            </div>

                        </li>)}
            </ul>}
           
        </div>
    );
}

export default ListView;