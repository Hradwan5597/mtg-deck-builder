import './App.css';
import {useState} from "react";
import ListView from './components/ListView.js';
import {DataBaseService} from './services/DataBaseService.js'


const onSearchByCardName = () => {
  DataBaseService.searchForCardByName(document.getElementById("card-name").value);
}

const onSearchBySetName = () => {
  DataBaseService.searchForSetByName(document.getElementById("set-name").value);
}

const onSearchClick = (event) => 
{
  switch (event.target["id"])
  {
    case "set-name-button":
      onSearchBySetName();
      break;
    case "card-name-button":
      onSearchByCardName();
      break;
    default:
      console.log("Bad input")
      break;
  }
}

const App = () => 
{
  const [cardNames, onSearchByCardName] = useState([]);
  const [setNames, onSearchBySetName] = useState([]);

  return (
    <div className="App">
      <h2>
        MTG Deck Builder
      </h2>
      <label htmlFor="set-name">Name of MTG Deck</label>
      <input type="text" id="set-name" name="set-name" minLength="25" maxLength="50"/>
      <button id="set-name-button" onClick={onSearchClick}>Search Set Name</button>
      <label htmlFor="card-name">Name of MTG Card</label>
      <input type="text" id="card-name" name="card-name" minLength="15" maxLength="25"/>
      <button id="card-name-button" onClick={onSearchClick}>Search Card Name</button>

    <ListView > 
    </ListView>
    </div>
  );
}

export default App;
