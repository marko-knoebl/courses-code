import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "Active Todos" heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/active todos/i);
  expect(headingElement).toBeInTheDocument();
});
