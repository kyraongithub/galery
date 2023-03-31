import { fireEvent, render } from "@testing-library/react";
import Home from "@/pages/home";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);
describe("render home", () => {
  let store;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      keyword: "",
    });
    component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("render home", () => {
    expect(component).toMatchSnapshot();
  });
  it("enter a keyword", () => {
    const { getByRole, getByText } = component;
    fireEvent.change(getByRole("form"), { target: { value: "test" } });
    fireEvent.click(getByText("Search"));
    expect(component).toMatchSnapshot();
    expect(getByRole("form").value).toEqual("test");
  });
});
