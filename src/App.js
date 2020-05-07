import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

const counterStyle = {
  color: 'black',
  backgroundImage: 'url(' + 'https://vignette.wikia.nocookie.net/muppet/images/2/2e/Count8Song.jpg/revision/latest?cb=20130528223217' + ')'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter step={1} />
        <Counter step={3} />
        <Counter step={50} />
      </header>
    </div>
  );
}

export default App;
