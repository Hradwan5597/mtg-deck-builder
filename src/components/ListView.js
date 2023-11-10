import './ListView.css';

const ListView = (props) => {

    const onClickRemove = (event) =>
    {   
        event.stopPropagation();
        event.preventDefault();
        const cartItemIndex = event.target.parentElement.parentElement.id;
        console.log(props.listViewContents[cartItemIndex])
        props.removeCartItemAtIndex(cartItemIndex)
    }

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
                        <li key={index} id={index}>
                            <div className="list-item-contents">
                                <img id="cart-item-image" src={cartItem.cardImage}></img>
                                <p>Product ID: {cartItem.cardID}</p>
                                <p>Qty:{cartItem.quantity}</p>
                            </div>
                            <div className="list-item-controls">
                                <button id="remove" onClick={onClickRemove}>Remove</button>
                            </div>

                        </li>)}
            </ul>}
           
        </div>
    );
}

export default ListView;