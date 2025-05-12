import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

const ProductList = React.memo(({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-20 pt-10">
      {/* Direct Input Field for Search */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-400 rounded-lg p-2 w-72"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-lg">No products found</p>
        ) : (
          filteredPosts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
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
