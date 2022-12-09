// import logo from './logo.svg';
import "./App.css";
// import ProductData from './Component/Product';
// import ProductData from './Data/Data';
import { Fragment } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Product from './Component/Product';
import Header from "./Component/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Data from "./Data/Data";
import Cards from "./Component/Card";
import { useState } from "react";
import Buttons from "../src/Component/Button";

function App() {
  return (
    <Fragment>
      <Container>
        <Header />
      </Container>
    </Fragment>
  );
}

export default App;
