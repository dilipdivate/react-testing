import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
<<<<<<< HEAD
    <div className="App-local">
=======
    <div className="App-remote">
>>>>>>> 897de85c5f2f9d87e490f8f4babba081bdd79ec1
        <button style={{backgroundColor: buttonColor}} onClick={() => setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
