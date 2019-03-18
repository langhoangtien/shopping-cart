import React, { Component } from "react";
import { connect } from "react-redux";
import { addCartAction } from "../actions";

class Product extends Component {
  addCart() {
    this.props.addCart();
  }

  render() {
    const { product } = this.props;
    const rating = active => {
      let inActive = 5 - active;
      let a = [];
      let key = 0;
      for (let index = 1; index <= active; index++) {
        a.push(<i key={key} className="fa fa-star" />);
        key++;
      }
      for (let index = 1; index <= inActive; index++) {
        a.push(<i key={key} className="fa fa-star-o" />);
        key++;
      }
      return <li>{a}</li>;
    };
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img alt={product.name} src={product.image} className="img-fluid" />

            <div className="mask waves-light waves-effect waves-light" />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>{product.name}</strong>
            </h4>
            <ul className="rating">{rating(product.rating)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <span className="btn-floating blue-gradient">
                  <i
                    className="fa fa-shopping-cart"
                    onClick={() => this.addCart(product.id)}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCart: () => dispatch(addCartAction(ownProps.product))
});
export default connect(
  null,
  mapDispatchToProps
)(Product);
