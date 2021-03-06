import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <AuthContextProvider>
      <BrandsContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </BrandsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
