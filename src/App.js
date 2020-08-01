import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Ecommerce/Navbar";
import "./Component/Ecommerce/style.css";
import ProductList from "./Component/Ecommerce/ProductList";
import Details from "./Component/Ecommerce/Details";
import Default from "./Component/Ecommerce/Default";
import Cart from "./Component/Ecommerce/Cart/Cart";
import { ProductProvider } from "./Component/Ecommerce/context";
import Modal from "./Component/Ecommerce/Modal";

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
