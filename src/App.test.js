import { render } from '@testing-library/react';

test('renders about link', () => {
  const { getByText } = render();
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});