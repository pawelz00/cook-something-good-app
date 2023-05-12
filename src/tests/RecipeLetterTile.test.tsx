import { render, screen } from '@testing-library/react';
import RecipleLetterTile from '../components/RecipeLetterTile';

test('RecipeLetterTile renders correctly', () => {
    render(<RecipleLetterTile letter="A"/>);
    const tile = screen.getByText(/A/i);
    expect(tile).toBeInTheDocument
})

test('RecipeLetterTile letter text is correct', () => {
    render(<RecipleLetterTile letter="B"/>);
    expect(screen.getByRole('heading').textContent).toBe('B');
})