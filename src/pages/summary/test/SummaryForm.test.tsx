import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from './../SummaryForm';

describe('Summary Form', () => {
  test('Checkbox', () => {
    render(<SummaryForm />);
    const checkButton = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    expect(checkButton).not.toBeChecked();
  });

  test('Button', () => {
    render(<SummaryForm />);
    const checkButton = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const orderButton = screen.getByRole('button', { name: /confirm order/i });
    expect(orderButton).toBeDisabled();

    fireEvent.click(checkButton);
    expect(orderButton).toBeEnabled();
    fireEvent.click(checkButton);
    expect(orderButton).toBeDisabled();
  });
});
