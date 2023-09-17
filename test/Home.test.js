import { render, screen } from '@testing-library/react';
import Home from "../src/pages/Home";

test('renders home link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Nihar Singla/i);
  expect(linkElement).toBeInTheDocument();
});
