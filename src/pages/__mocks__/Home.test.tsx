
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import Home from "../Home";

jest.mock("../service/RestApi"); 

describe("Home Component", () => {
  test("renders loading spinner while fetching data", async () => {
    render(<Home />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  test("renders news cards after data is fetched", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.queryByText("Loading")).not.toBeInTheDocument();
      expect(screen.getByText("Mock Title 1")).toBeInTheDocument();
     
    });
  });

});
