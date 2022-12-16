import './App.css';
import { useState } from 'react';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(['','','','','','','','',''])
  const [player, setPlayer] = useState(true)
  const propVariable = "Hello There"

  const handleClick = () => {
    setSquares(['','','','','','','','',''])
    setPlayer(true)
  }

  const calculateWinner = (array) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i<lines.length; i++) {
      const [a,b,c] = lines[i];
      if(
        array[a] &&
        array[a] === array[b] &&
        array[a] === array[c]
      ) {
        return `${array[a]} Won!`
      }
    }
    return "Who will Win?";
  }


  return (
    <div className="App">
      <div className='container'>
        {squares.map((val, index) => {
        return (
          <Square
          squareValue={val}
          index={index}
          squares ={squares}
          setSquares = {setSquares}
          player ={player}
          setPlayer = {setPlayer} 
          propsVar={propVariable}/>
        );
      })} </div>
      <button onClick={handleClick}>Reset</button>
      <br />
      <span>
        {calculateWinner(squares)}
      </span>
    </div>
  );
}

export default App;
