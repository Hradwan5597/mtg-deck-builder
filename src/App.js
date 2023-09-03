import './App.css';
import {useState} from "react";
import ListView from './components/ListView.js';
import Card from './components/Card.js'
import {DataBaseService} from './services/DataBaseService.js'

const App = () => 
{
  const [cardsSearchedByName, setCardsSearchedByName] = useState([]);
  const [cardsSearchedBySetName, setCardsSearchedBySetName] = useState([]);
  const [cardsSearchedBySetCode, setCardsSearchedBySetCode] = useState([])
  const [searchResults, setSearchResults] = useState([

  <Card cardName="Card 1" imageLink="https://cards.scryfall.io/normal/front/a/4/a4d17394-b9c4-43f6-9a6d-2c7c7ecb1d74.jpg?1562552811" />,
  <Card cardName="Card 2" imageLink="https://cards.scryfall.io/normal/front/a/e/ae635d18-5d22-494c-8bc7-5d52f3021cbb.jpg?1562553519" />

  ]);

  const onSearchByCardName = () => 
  {
    var result = DataBaseService.searchForCardByName(document.getElementById("card-name").value, setCardsSearchedByName);
    // transform data base result into <Card /> tags
    console.log(result);
  }
  
  const onSearchBySetName = () => 
  {
    var result = DataBaseService.searchForSetByName(document.getElementById("set-name").value, setCardsSearchedBySetName);
    // transform data base result into <Card /> tags
    console.log(result);
  }

  const onSearchBySetCode = () => 
  {
    var result = DataBaseService.searchForSetByCode(document.getElementById("set-code").value, setCardsSearchedBySetCode);
    // transform data base result into <Card /> tags
    console.log(result);
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
      case "set-code-button":
        onSearchBySetCode();
        break;
      default:
        console.log("Bad input")
        break;
    }
  }

  return (
    <div className="App">
      <h2>MTG Deck Builder</h2>
      <label htmlFor="set-name">Name of MTG Set</label>
      <input type="text" id="set-name" name="set-name" minLength="25" maxLength="50"/>
      <button id="set-name-button" onClick={onSearchClick}>Search Set Name</button>
      <label htmlFor="card-name">Name of MTG Card</label>
      <input type="text" id="card-name" name="card-name" minLength="15" maxLength="25"/>
      <button id="card-name-button" onClick={onSearchClick}>Search Card Name</button>
      <label htmlFor="set-code">Code of MTG Set</label>
      <input type="text" id="set-code" name="set-code" minLength="3" maxLength="8"></input>
      <button id="set-code-button" onClick={onSearchClick}>Search Set Code</button>

      <ListView searchResults={searchResults}/>
    
    </div>
  );
}

export default App;
