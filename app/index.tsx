import { store } from "@/src/store";
import React from "react";
import { Provider } from "react-redux";
import TaskScreen from "./TaskScreen";

const App = () => {
  return (
    <Provider store={store}>
      <TaskScreen />
    </Provider>
  );
};

export default App;