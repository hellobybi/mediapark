import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext";
import BasketProvider from "./context/BasketContext";
import ChosenProvider from "./context/ChosenContext";
import CompareProvider from "./context/CompareContext";
import "./index.css";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <BasketProvider>
        <ChosenProvider>
          <CompareProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CompareProvider>
        </ChosenProvider>
      </BasketProvider>
    </ProductProvider>
  </BrowserRouter>
);
