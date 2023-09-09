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
  const [cardsSearchedBySetCode, setCardsSearchedBySetCode] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [previouslySearchedCategory, setPreviouslySearchedCategory] = useState("");

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
        setPreviouslySearchedCategory("set-name")
        onSearchBySetName();
        break;
      case "card-name-button":
        setPreviouslySearchedCategory("card-name")
        onSearchByCardName();
        break;
      case "set-code-button":
        setPreviouslySearchedCategory("set-code")
        onSearchBySetCode();
        break;
      default:
        console.log("Bad input")
        break;
    }
  }

  const onSelectCounter = (event) =>
  {
    console.log(event.target["value"])
    switch (previouslySearchedCategory)
    {
      case "set-name":

        break;
      case "card-name":

        break;
      case "set-code":

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
      <div className='SearchControls'>
        <select onChange={onSelectCounter}>
          <option value="5"> 5 </option>
          <option value="10"> 10 </option>
          <option value="25"> 25 </option>
          <option value="50"> 50 </option>
        </select>
      </div>
      <ListView searchResults={searchResults}/>
    </div>
  );
}

export default App;
