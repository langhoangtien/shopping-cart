import React, { Component } from "react";
import Product from "./Product";
import productImage from "../assets/images/products/IP6.jpg";
import productImage1 from "../assets/images/products/IPX.png";

class Products extends Component {
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          <Product productImage={productImage} />
          <Product productImage={productImage1} />
          <Product productImage={productImage} />
          <Product productImage={productImage} />
          <Product productImage={productImage} />
        </div>
      </section>
    );
  }
}

export default Products;
