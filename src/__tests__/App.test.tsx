import { render, screen } from "@testing-library/react";
//to use toBeInTheDocument
import "@testing-library/jest-dom";
import App from "../App";
//enzyme is being deprecated. If I want to shallow render a component, meaning not it's children, then use react-test-renderer/shallow
import { shallow } from "enzyme";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/eMonk/i);
	expect(linkElement).toBeInTheDocument();
});

jest.mock("axios", () => ({
	get: () => ({
		data: {
			id: 100,
			username: "Drew",
		},
	}),
}));

test("renders learn react link", () => {
	shallow(<App />);
});
