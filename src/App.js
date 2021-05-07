import logo from './logo.svg';
import logo_haw from './logo_haw.svg';
import './App.css';
import TownComponent from './components/TownComponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo_haw} alt="HAW-logo"></img>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          React.js with MongoDB for <code>INP2</code>
        </p>
      </header>
      
      <main>
        <div class="container">
        <TownComponent/>
        </div>
      </main>
      
    </div>
  );
}

export default App;
