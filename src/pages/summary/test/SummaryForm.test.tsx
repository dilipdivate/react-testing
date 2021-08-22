import {
  queryByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from './../SummaryForm';
import userEvent from '@testing-library/user-event';

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

    userEvent.click(checkButton);
    expect(orderButton).toBeEnabled();
    userEvent.click(checkButton);
    expect(orderButton).toBeDisabled();
  });

  test('Popover', async () => {
    // command[All]ByQueryType - command ( get, query, find) , All - include/exclude , QueryType - Role, AltText, Text,
    // Form Elements - PlaceholderText, LabelText, DisplayValue
    //
    render(<SummaryForm />);

    //popover starts with hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappear
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
