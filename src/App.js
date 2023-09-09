import './App.css';
import {useState} from "react";
import ListView from './components/ListView.js';
import SearchPanel from './components/SearchPanel.js';
import Card from './components/Card.js'
import {DataBaseService} from './services/DataBaseService.js'

const App = () => 
{
  const [cardsSearchedByName, setCardsSearchedByName] = useState([]);
  const [cardsSearchedBySetName, setCardsSearchedBySetName] = useState([]);
  const [cardsSearchedBySetCode, setCardsSearchedBySetCode] = useState([])
  const [searchResults, setSearchResults] = useState([]);

  const onSearchByCardName = () => 
  {
    DataBaseService.searchForCardByName(document.getElementById("card-name").value, setCardsSearchedByName)
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
      })
    });
  }
  
  const onSearchBySetName = () => 
  {
    DataBaseService.searchForSetByName(document.getElementById("set-name").value, setCardsSearchedBySetName)
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
      })
    });

  }

  const onSearchBySetCode = () => 
  {
    DataBaseService.searchForSetByCode(document.getElementById("set-code").value, setCardsSearchedBySetCode)    
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
      })
    });
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
      <SearchPanel onSearchClick={onSearchClick}/>
      <ListView searchResults={searchResults}/>
    </div>
  );
}

export default App;
