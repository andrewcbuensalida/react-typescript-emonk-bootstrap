import { render, screen } from '@testing-library/react';
import App from '../App';

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});


jest.mock('axios',()=>({
    get:()=>({
        data:{
            id:100,
            username:'Drew'
        }
    })
}))

test('renders learn react link', () => {
  render(<App />);
  
});
