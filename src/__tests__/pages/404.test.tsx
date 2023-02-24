import { render, screen } from '@testing-library/react';
import '@types/jest';
import '@testing-library/jest-dom/extend-expect';

import NotFoundPage from '@/pages/404';

describe('404', () => {
  it('renders a heading', () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/not found/i);

    expect(heading).toBeInTheDocument();
  });
});
