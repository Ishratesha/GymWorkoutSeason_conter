
import './App.css';
import FitnessCart from './Components/Cartsection/FitnessCart';
import ReactQUAnswer from './Components/Cartsection/ReactQUAnswer';


function App() {
 
  return (
    <div className="App">
    <h1 className='name'><span className='firstname'>Women's</span> <span className='midelname'>WorkOut</span> <span className='lastname'>Club</span> </h1>
    <FitnessCart></FitnessCart>
  <ReactQUAnswer></ReactQUAnswer>

    </div>
  );
}

export default App;
