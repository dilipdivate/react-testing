import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

xtest('button has correct color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  // expect(colorButton.textContent).toBe('Change')
  expect(colorButton).toHaveTextContent('Change to red');
})

xtest('checkbox', () => {
  render(<App />);
  // what if there are multiple buttons, so name it 
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // what if there are multiple checkboxes, so name it 
  const checkbox = screen.getByRole('checkbox', {name: 'Disabled Button'});
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  
  fireEvent.click(colorButton)  
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  
})


test('Change color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  // expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})
  // expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')

})

xdescribe('Spaces before camel cases', () => {
  
  test('Works for no inner capital letters', () => {
      expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });

});
