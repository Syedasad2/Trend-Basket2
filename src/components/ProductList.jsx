import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductList = React.memo(({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

ProductList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
