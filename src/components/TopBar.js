import './TopBar.css';
import { useState } from 'react';

const TopBar = (props) =>
{

    const [shoppingCart, setShoppingCartItem] = useState([])

    return(
        <div className="TopBar grid-container">
            <h2>MTG Deck Builder</h2>
            <div className="user-controls">
                <button id="cart" onClick={props.onShoppingCartClick}>
                    Cart
                </button>
            </div>
            
        </div>
    )
}

export default TopBar;