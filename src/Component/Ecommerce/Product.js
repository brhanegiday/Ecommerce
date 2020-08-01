import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className=" product-list col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="product"
                      className="card-img-top mb-4"
                      // width="80"
                      height="300"
                    />
                  </Link>
                  <button
                    className="btn card-btn btn-info"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <p className="lead"> Add to Cart</p>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <h6 className="align-self-center mb-0">{title}</h6>
            <h4 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
