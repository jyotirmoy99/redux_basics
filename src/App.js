import ShirtContainer from "./components/ShirtContainer";
import PantContainer from "./components/PantContainer";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import HookShirtContainer from "./components/HookShirtContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShirtContainer />
        <HookShirtContainer />
        <PantContainer />
      </div>
    </Provider>
  );
}

export default App;
