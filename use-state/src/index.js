import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let _state = [];
let index = 0;
const myUseState = (initValue) => {
  const currentIndex = index;
  _state[currentIndex] = _state[currentIndex] === undefined ? initValue : _state[currentIndex]
  const setState = (newValue) => {
    _state[currentIndex] = newValue;
    render()
  }
  index += 1;
  return [_state[currentIndex], setState]
}


const render = () => {
  index = 0;
  ReactDOM.render(<App />, document.getElementById('root'));
}
function App() {
  const [x, setX] = myUseState(0)
  const [y, setY] = myUseState(0)
  return (
    <div>
      <p>{x}</p>
      <button onClick={() => setX(x + 1)}>click</button>
      <p>{y}</p>
      <button onClick={() => setY(y + 1)}>click</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
