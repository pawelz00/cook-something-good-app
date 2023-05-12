import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home renders correctly', () => {
    render(<Home/>);
    const home = screen.getByText(/Cooking is fun!/i);
    expect(home).toBeInTheDocument
})

test('Home link to API is correct', () => {
    const linkUrl = "https://www.themealdb.com/api.php";
    render(<Home/>);
    
    const linkEl = screen.getByText('TheMealDB') as HTMLAnchorElement
    expect(linkEl.href).toBe(linkUrl);
})

test('Home container class is correct', () => {
    const homeClass = "container home-page";
    render(<Home/>);
    
    const mainEl = screen.getByRole('main') as HTMLElement;
    expect(mainEl.className).toBe(homeClass);
})