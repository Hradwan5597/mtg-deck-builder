import './App.css';
import ListView from './components/ListView.js';
import {DataBaseService} from './services/DataBaseService.js'

function App() 
{

  const onSearchByCardName = () =>
  {
    
    DataBaseService.searchForCardByName(document.getElementById("card-name").value);
  }

  const onSearchBySetName = () =>
  {
    DataBaseService.searchForSetByName(document.getElementById("set-name").value);
  }

  return (
    <div className="App">
      <h2>
        MTG Deck Builder
      </h2>
      <label htmlFor="set-name">Name of MTG Deck</label>
      <input type="text" id="set-name" name="set-name" minLength="25" maxLength="50"/>
      <button onClick={onSearchBySetName}>Search Set Name</button>
      <label htmlFor="card-name">Name of MTG Card</label>
      <input type="text" id="card-name" name="card-name" minLength="15" maxLength="25"/>
      <button onClick={onSearchByCardName}>Search Card Name</button>

    <ListView> 
      {/* TODO: Hardcode Card objects with images */}
    </ListView>
    </div>
  );
}

export default App;
