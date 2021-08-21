import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="App">

        <button style={{backgroundColor: disabled ? 'gray' : buttonColor}} 
                onClick={() => setButtonColor(newButtonColor)}
                disabled={disabled}>
                  Change to {replaceCamelWithSpaces(newButtonColor)}</button>
        <input type="checkbox" 
               defaultChecked={disabled} 
               id="disable-button-checkbox"
               aria-checked={disabled}
               onChange={ (e) => setDisabled(e.target.checked)}     />
        <label htmlFor="disable-button-checkbox">Disabled Button</label>
    </div>
  );
}

export default App;
