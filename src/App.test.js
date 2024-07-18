
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', async () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await screen.findByText('Reward Points');
  });
  
});
