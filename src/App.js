import './App.css';
import Game from './Game';
import storyData from './storyData'

const App = () => {
  return (
    <div className="App">
      <Game storyData={storyData} />
    </div>
  );
}

export default App;