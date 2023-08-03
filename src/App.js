import './App.css';
import ListView from './components/ListView.js';

function App() {
  return (
    <div className="App">
      <h2>
        MTG Deck Builder
      </h2>
      <label for="deck-name">Name of MTG Deck</label>
      <input type="text" id="deck-name" name="deck-name" minlength="25" maxlength="50"/>
      <button>Go</button>
      <label for="card-name">Name of MTG Card</label>
      <input type="text" id="card-name" name="card-name" minlength="15" maxlength="25"/>
      <button>Go</button>

    <ListView> </ListView>
    </div>
  );
}

export default App;
