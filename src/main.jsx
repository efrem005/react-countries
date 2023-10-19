import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store, persister } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter basename="/react-countries/">
            <PersistGate loading={null} persistor={persister}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
);
