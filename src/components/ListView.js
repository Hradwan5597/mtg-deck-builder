import './ListView.css';

const ListView = (props) => {
    return (
        <div className="ListView"> 
            <ul>
                {props.searchResults.length == 0 ? <p>No results</p> : 
                props.searchResults.map(e => <li>{e}</li>)}
            </ul>
            <div className="pagination">
                1 2 3 4 5
            </div>
        </div>
    );
}

export default ListView;