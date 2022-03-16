import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Layout } from "./containers";
import { AppContextProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Layout>
        <App />
      </Layout>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
