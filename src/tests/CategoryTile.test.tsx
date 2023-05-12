import { render, screen } from '@testing-library/react';
import CategoryTile from '../components/CategoryTile';

test('CategoryTile renders correctly', () => {
    render(<CategoryTile category='Chicken' img='randomimg.jpg'/>);
    const tile = screen.getByText(/Chicken/i);
    expect(tile).toBeInTheDocument
})

test('CategoryTile category text is correct', () => {
    render(<CategoryTile category='Beef' img='randomimg.jpg'/>);
    expect(screen.getByRole('heading').textContent).toBe('Beef');
})

test('CategoryTile img is displayed correctly', () => {
    render(<CategoryTile category='Dessert' img='randomimg.jpg'/>);
    const imgEl = screen.getByAltText('Dessert') as HTMLImageElement
    expect(imgEl).toBeInTheDocument;
})