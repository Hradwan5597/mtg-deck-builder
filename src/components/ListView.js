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
                        <li key={index}> {cartItem} </li>)}
            </ul>}
           
        </div>
    );
}

export default ListView;