import Pizza from './Pizza';
import './index.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast React Pizza</h1>
        <Pizza />
        <Pizza />
        <Pizza />
      </header>
    </div>
  );
}

export default App;
