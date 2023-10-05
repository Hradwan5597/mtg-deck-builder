import './ListView.css';
import Card from './Card.js';

const ListView = (props) => {
    console.log(props.searchResults)
    return (
        <div className="ListView"> 
            <ul> 
                {props.searchResults.length === 0 ? <p>No results</p> : 
                props.searchResults.map(card => <li> {card} </li>)}
            </ul>
        </div>
    );
}

export default ListView;