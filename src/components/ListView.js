import './ListView.css';

const ListView = (props) => {
    return (
        <div className="ListView"> 
            <ul> 
                {props.searchResults.length === 0 ? <p>No results</p> : 
                props.searchResults.map((card, index) => <li key={card.props.cardName + "." + index}> {card} </li>)}
            </ul>
        </div>
    );
}

export default ListView;