import "./App.css";
import routes from "./router";
import store from "./stores"
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
}

export default App;
