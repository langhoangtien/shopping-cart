import React, { Component } from "react";
import Product from "./Product";
import productImage from "../assets/images/products/IP6.jpg";
import productImage1 from "../assets/images/products/IPX.png";
import { connect } from "react-redux";

class Products extends Component {
  showProps() {
    console.log(this.props);
  }
  render() {
    const elements = this.props.products.map((product, index) => (
      <Product key={product.id} product={product} />
    ));

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
