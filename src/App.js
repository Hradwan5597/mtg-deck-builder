import './App.css';
import { useState, useEffect } from "react";
import Card from './components/Card.js';
import Modal from './components/Modal.js';
import TopBar from './components/TopBar.js';
import ListView from './components/ListView.js';
import SearchPanel from './components/SearchPanel.js';
import { DataBaseService } from './services/DataBaseService.js';

const App = () => {

  // application state
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentSkipNum, setCurrentSkipNum] = useState(0);
  const [currentCounterValue, setCurrentCounterValue] = useState(5);
  const [previousSearchQuery, setPreviousSearchQuery] = useState({
    category: "", query: "", skipNum: currentSkipNum, counter: currentCounterValue
  });

  // application effects

  useEffect(() => {console.log(searchResults)}, [searchResults])

  // DB service  
  const onSearchByCardName = () => {
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
            setSearchResults(result.map((cardDocument, index) =>
              <Card cardID={cardDocument.cardName + "." + index + "." + cardDocument._id} onCardClick={onCardClick}cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl} />))
          })
      });
  }

  const onSearchBySetName = () => {
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

  const onSearchBySetCode = () => {
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
            setSearchResults(result.map((cardDocument, index) =>
              <Card cardID={cardDocument.cardName + "." + index} onCardClick={onCardClick} cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl} />))
          })
      });
  }

  // search controls
  const clearInputs = () => {
    document.getElementById("card-name").value = ""
    document.getElementById("set-name").value = ""
    document.getElementById("set-code").value = ""
  }

  const getCardFromSearchResults = (cardID) =>
  {
    //todo
    console.log(cardID)
  }

  const onSearchClick = (event) => {
    setSearchResults([])
    event.stopPropagation();
    event.preventDefault();
    switch (event.target["id"]) {
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

  const onSelectCounter = (event) => {
    setCurrentCounterValue(event.target.value)
  }

  const onTogglePage = (event) => {
    setSearchResults([]);
    switch (event.target["id"]) {
      case "prev-button":
        if (currentSkipNum !== 0)
          setCurrentSkipNum(currentSkipNum - 1)
        break;
      case "next-button":
        setCurrentSkipNum(currentSkipNum + 1)
        break;
      default:
        console.log("Bad input")
        break;
    }

    setPreviousSearchQuery({ ...previousSearchQuery, skipNum: currentSkipNum });
    reloadResults()
  }

  const onReloadResults = (event) => {
    setSearchResults([]);
    reloadResults();
  }

  const reloadResults = () => {
    switch (previousSearchQuery.category) {
      case "card-name":
        DataBaseService.searchForCardByName(previousSearchQuery.query, previousSearchQuery.skipNum, previousSearchQuery.counter)
          .then(response => {
            response.json()
              .then(result => {
                setSearchResults(result.map(cardDocument =>
                  <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl} onCardClick={onCardClick} />))
              });
          })
        break;
      case "set-name":
        DataBaseService.searchForSetByName(previousSearchQuery.query, previousSearchQuery.skipNum, previousSearchQuery.counter)
          .then(response => {
            response.json()
              .then(result => {
                setSearchResults(result.map(setDocument => <>{setDocument.setName} {setDocument.setCode}</>))
              });
          });
        break;
      case "set-code":
        DataBaseService.searchForSetByCode(previousSearchQuery.query, previousSearchQuery.skipNum, previousSearchQuery.counter)
          .then(response => {
            response.json()
              .then(result => {
                setSearchResults(result.map(cardDocument =>
                  <Card cardName={cardDocument.cardName} imageLink={cardDocument.imageUrl} />))
              });
          });
        break;
    }
  }

  //user controls
  const onShoppingCartClick = (event) =>
  {
    setShowModal(true);
  }

  const onCardClick = (event) => {
    setShowModal(true)
    getCardFromSearchResults(event.target)
  }

  const onModalClick = (event) => {
    setShowModal(false)
  }

  // UI
  return (
    <div className="App">

      {showModal && <Modal onModalClick={onModalClick} />}

      <TopBar onShoppingCartClick={onShoppingCartClick} />

      <SearchPanel
        onSearchClick={onSearchClick}
        onSelectCounter={onSelectCounter}
        onTogglePage={onTogglePage}
        onReloadResults={onReloadResults} 
        buttonDisabled={previousSearchQuery.category === ""}/>

      <ListView searchResults={searchResults} />

    </div>
  );
}

export default App;
