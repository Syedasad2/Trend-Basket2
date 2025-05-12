import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search"; 

const ProductList = React.memo(({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredPosts = posts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-20 pt-10">
      {/* Search Bar */}
      <Search onSearchChange={handleSearchChange} />

      <div className="flex flex-wrap justify-center mt-10">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-lg">No products found</p>
        ) : (
          filteredPosts.map((product) => <ProductCard key={product.id} product={product} />)
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
