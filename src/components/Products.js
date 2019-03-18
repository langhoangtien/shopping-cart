import React, { Component } from "react";
import Product from "./Product";

import { connect } from "react-redux";

class Products extends Component {
  showProps() {
    console.log(this.props);
  }
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <button className="btn btn-primary" onClick={() => this.showProps()}>
          showProps
        </button>
        <div className="row">
          {this.props.products.map((product, index) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products };
};
export default connect(mapStateToProps)(Products);
