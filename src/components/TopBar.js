import './TopBar.css';
import { useState } from 'react';

const TopBar = (props) =>
{

    const [shoppingCart, setShoppingCartItem] = useState([])

    const onShoppingCartClick = (event) =>
    {
        console.log(event.target)
    }

    return(
        <div className="TopBar grid-container">
            <h2>MTG Deck Builder</h2>
            <div className="user-controls">
                <div className="shopping-cart-icon" onClick={onShoppingCartClick}>

                </div>
            </div>
            
        </div>
    )
}

export default TopBar;