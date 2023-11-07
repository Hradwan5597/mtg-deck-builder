import './TopBar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCircle } from '@fortawesome/free-solid-svg-icons';

const TopBar = (props) =>
{   
    const [cartHoldsItems, setCartHoldsItems] = useState(false);

    return(
        <div className="TopBar grid-container">
            <h2>MTG Deck Builder</h2>
            <div className="user-controls">
                <button id="cart" onClick={props.onShoppingCartClick}>
                    <span className='fa-layers fa-fw'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cartHoldsItems && <FontAwesomeIcon icon={faCircle} color="orange" transform="right-20 down-20"/>}
                        
                    </span>
                </button>
            </div>
            
        </div>
    )
}

export default TopBar;