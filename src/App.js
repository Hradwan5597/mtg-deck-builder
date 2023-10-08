import './App.css';
import {useState} from "react";
import TopBar from './components/TopBar';
import ListView from './components/ListView.js';
import SearchPanel from './components/SearchPanel.js';
import Card from './components/Card.js'
import {DataBaseService} from './services/DataBaseService.js'

const App = () => 
{

  // application state
  const [searchResults, setSearchResults] = useState([]);
  const [currentSkipNum, setCurrentSkipNum] = useState(0);
  const [currentCounterValue, setCurrentCounterValue] = useState(5);
  const [previousSearchQuery, setPreviousSearchQuery] = useState({
    category: "", query: "", skipNum: currentSkipNum, counter: currentCounterValue});

  // DB service  
  const onSearchByCardName = () => 
  {
    setPreviousSearchQuery({
      category: "card-name", 
      query: document.getElementById("card-name").value, 
      skipNum: currentSkipNum,
      counter: currentCounterValue
    });

    DataBaseService.searchForCardByName(
      document.getElementById("card-name").value, currentSkipNum, currentCounterValue)
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => 
          <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
      })
    });
  }
  
  const onSearchBySetName = () => 
  {
    setPreviousSearchQuery({
      category: "set-name", 
      query: document.getElementById("set-name").value, 
      skipNum: currentSkipNum,
      counter: currentCounterValue
    });

    DataBaseService.searchForSetByName(
      document.getElementById("set-name").value, currentSkipNum, currentCounterValue)
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(setDocument => <>{setDocument.setName} {setDocument.setCode}</>))
      })
    });
  }

  const onSearchBySetCode = () => 
  {
    setPreviousSearchQuery({
      category: "set-code", 
      query: document.getElementById("set-code").value, 
      skipNum: currentSkipNum,
      counter: currentCounterValue
    });

    DataBaseService.searchForSetByCode(
      document.getElementById("set-code").value, currentSkipNum, currentCounterValue)    
    .then(response => {
      response.json()
      .then(result => {
        setSearchResults(result.map(cardDocument => 
          <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl}/>))
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
    setSearchResults([])
    event.stopPropagation();
    event.preventDefault();
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
    setCurrentCounterValue(event.target.value)
  }

  const onTogglePage = (event) =>
  {
    searchResults([])
    switch (event.target["id"])
    {
      case "prev-button":
        setCurrentSkipNum(currentSkipNum + 1)
        break;
      case "next-button":
        setCurrentSkipNum(currentSkipNum - 1)
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

      <TopBar />

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
