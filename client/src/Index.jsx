import {createRoot} from "react-dom/client";
import React from "react";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
)