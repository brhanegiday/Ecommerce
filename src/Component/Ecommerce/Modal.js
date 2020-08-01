import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { title, img, price } = value.modalProduct;
          if (!modalOpen) return null;
          else {
            return (
              <div className="modal-item container ">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 p-5 mx-auto col-md-6 col-lg-6  text-center text-capitalize"
                  >
                    <h5>item added to cart</h5>
                    <img
                      src={img}
                      alt="Product"
                      // width="300"
                      // height="300"
                      className="img-fluid"
                    />
                    <h4>{title}</h4>
                    <h5 className="text-muted">price: ${price}</h5>
                    <Link to="/">
                      <button
                        className="btn-lg alert-info text-capitalize"
                        onClick={() => closeModal()}
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        className="btn alert-danger btn-lg alert-success m-3 text-capitalize"
                        onClick={() => closeModal()}
                      >
                        Go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
