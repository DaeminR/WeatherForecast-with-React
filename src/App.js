import './App.css';
import Weatherbox from './Weatherbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <p>Get the latest weather updates for your location.</p>
      </header>
      <main>
        <Weatherbox />
      </main>
    </div>
  );
}

export default App;
