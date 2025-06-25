import { BrowserRouter } from "react-router";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
const { render, screen, fireEvent } = require("@testing-library/react");
const { act } = require("react");

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //cards before search
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  //get search text
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const serachInput = screen.getByTestId("searchInput");
  fireEvent.change(serachInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

it("should filter top rated restaurant and display", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurent",
  });
  fireEvent.click(filterBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(7);
});
