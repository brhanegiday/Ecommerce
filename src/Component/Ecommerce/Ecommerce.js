import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import ProductList from "./ProductList";
import Details from "./Details";
import Default from "./Default";
import Cart from "./Cart/Cart";
import { ProductProvider } from "./context";
import Modal from "./Modal";

export default class Ecommerce extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </Router>
        </ProductProvider>
      </React.Fragment>
    );
  }
}
