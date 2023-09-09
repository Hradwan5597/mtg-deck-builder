import './App.css';
import {useState} from "react";
import ListView from './components/ListView.js';
import SearchPanel from './components/SearchPanel.js';
import Card from './components/Card.js'
import {DataBaseService} from './services/DataBaseService.js'

const App = () => 
{

  // application state

  const [cardsSearchedByName, setCardsSearchedByName] = useState([]);
  const [cardsSearchedBySetName, setCardsSearchedBySetName] = useState([]);
  const [cardsSearchedBySetCode, setCardsSearchedBySetCode] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [previouslySearchedCategory, setPreviouslySearchedCategory] = useState("");


  // DB service

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

  // search controls

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
        // todo rerun search with selected value as the new "limit" parameter for mongo DB search
        break;
      case "card-name":
        // todo rerun search with selected value as the new "limit" parameter for mongo DB search
        break;
      case "set-code":
        // todo rerun search with selected value as the new "limit" parameter for mongo DB search
        break;
      default:
        console.log("Bad input")
        break;
    }
  }

  const onTogglePage = (event) =>
  {
    switch (event.target["id"])
    {
      case "prev-button":
        // todo rerun search with new page using -1 to the "skip" parameter for mongo DB search
        break;
      case "next-button":
        // todo rerun search with new page using +1 to the "skip" parameter for mongo DB search 
        break;
      default:
        console.log("Bad input")
        break;
    }
  }

  // UI
  return (
    <div className="App">
      <h2>MTG Deck Builder</h2>
      <SearchPanel onSearchClick={onSearchClick}/>
      <div className='SearchControls'>
        Cards to display: 
        <select onChange={onSelectCounter}>
          <option value="5"> 5 </option>
          <option value="10"> 10 </option>
          <option value="25"> 25 </option>
          <option value="50"> 50 </option>
        </select>
        <button onClick={onTogglePage} id='prev-button'>Previous</button>
        <button onClick={onTogglePage} id='next-button'>Next</button>
      </div>
      <ListView searchResults={searchResults}/>
    </div>
  );
}

export default App;
