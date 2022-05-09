import './App.css';
import Game from './components/game/Game';
import Banner from './components/banner/Banner';

function App() {


  //localStorage.clear()
  console.log(localStorage)

  return (
    <div className="App">
      <Banner/>
      <Game/>
    </div>
  );
}

export default App;
