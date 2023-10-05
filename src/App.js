import './App.css';
import {useState} from "react";
import ListView from './components/ListView.js';
import SearchPanel from './components/SearchPanel.js';
import Card from './components/Card.js'
import {DataBaseService} from './services/DataBaseService.js'

const App = () => 
{

  // application state
  const [searchResults, setSearchResults] = useState([]);

  // DB service  
  const onSearchByCardName = () => 
  {
    // setPreviousSearchRequest({category: "card-name", query: document.getElementById("card-name").value, skipNum: })
    DataBaseService.searchForCardByName(document.getElementById("card-name").value, 0, 5)
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
      })
    });
  }
  
  const onSearchBySetName = () => 
  {
    // setPreviousSearchRequest({category: "set-name", query: document.getElementById("set-name").value, skipNum: })
    DataBaseService.searchForSetByName(document.getElementById("set-name").value, 0, 5)
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(setDocument => <>{setDocument.setName} {setDocument.setCode}</>))
      })
    });
  }

  const onSearchBySetCode = () => 
  {
    // setPreviousSearchRequest({category: "set-code", query: document.getElementById("set-code").value, skipNum: })
    DataBaseService.searchForSetByCode(document.getElementById("set-code").value, 0, 5)    
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
      })
    });
  }

  // search controls

  const clearInputs = (event) => 
  {
    document.getElementById("card-name").value=""
    document.getElementById("set-name").value=""
    document.getElementById("set-code").value=""
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
    clearInputs();
  }

  const onSelectCounter = (event) =>
  {
    //todo
  }

  const onTogglePage = (event) =>
  {
    switch (event.target["id"])
    {
      case "prev-button":
        
        break;
      case "next-button":

        break;
      default:
        console.log("Bad input")
        break;
    }
  }

  const onReloadResults = (event) =>
  {
    // todo rerun previous search
    console.log(event);
    setSearchResults([]);
  }

  // UI
  return (
    <div className="App">
      <h2>MTG Deck Builder</h2>
      
      <SearchPanel 
        onSearchClick={onSearchClick} 
        onSelectCounter={onSelectCounter} 
        onTogglePage={onTogglePage} 
        onReloadResults={onReloadResults}/>

      <ListView searchResults={searchResults}/>

    </div>
  );
}

export default App;
