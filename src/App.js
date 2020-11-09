import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.sass";

import Cocktails from "./components/Cocktails";

function App() {
  return (
    <Provider store={store}>
      <Cocktails />
    </Provider>
  );
}

export default App;
