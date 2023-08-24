import { render, screen } from '@testing-library/react';
import Home from "../src/Pages/Home";

test('renders home link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Nihar Singla/i);
  expect(linkElement).toBeInTheDocument();
});
