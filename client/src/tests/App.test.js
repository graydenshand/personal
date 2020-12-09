import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders title text', () => {
  render(<App />);
  const title = screen.getByText(/Structural Repairs Ongoing/i);
  expect(title).toBeInTheDocument();
});
