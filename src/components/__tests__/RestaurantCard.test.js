import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"
it("should render Restaurant Componenet with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("French Toast");
  expect(name).toBeInTheDocument();
});
