import logo from "./logo.svg";
import RouterComponent from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterComponent />
      </div>
    </Provider>
  );
}

export default App;
