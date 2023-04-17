import React from "react";
import ReactDOM from "react-dom/client";

// Provider que permite a todos sus hijos acceder el state de la app
import { Provider } from "react-redux";

// Store
import store from "./redux/store";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
