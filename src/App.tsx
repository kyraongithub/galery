import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./context/redux";
import { routes } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((item: any, key: number) => {
            return (
              <Route key={key} path={item?.path} element={<item.element />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
