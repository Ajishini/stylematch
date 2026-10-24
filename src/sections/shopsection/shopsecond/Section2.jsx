import React, { useState } from "react";
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import "./Section2.css";

const Section2 = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedDiscount, setSelectedDiscount] = useState("All");

  const categories = [
    "All",
    "Tops",
    "Bottoms",
    "Dresses",
    "Footwear",
    "Bags",
    "Accessories",
  ];

  const priceOptions = [
    "All",
    "Under ₹1,500",
    "₹1,500 - ₹2,500",
    "₹2,500 - ₹3,500",
    "Above ₹3,500",
  ];

  const discountOptions = [
    "All",
    "10% or more",
    "20% or more",
    "30% or more",
  ];

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedPrice("All");
    setSelectedDiscount("All");
    setSearchTerm("");
  };

  return (
    <section className="shop-section-two">
      <div className="shop-section-two-container">
        <div className="shop-toolbar">
          <div className="shop-search">
            <Search size={18} />
            <input type="text" placeholder="Search products..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            {searchTerm && (
              <button type="button" onClick={() => setSearchTerm("")} className="shop-clear-search" aria-label="Clear search" >
                <X size={16} />
              </button>
            )}
          </div>

          <button type="button" className={`shop-filter-button ${ showFilter ? "active" : "" }`} onClick={() => setShowFilter(!showFilter)} >
            <SlidersHorizontal size={17} />
            <span>FILTER</span>
            <ChevronDown size={15} className={ showFilter ? "filter-arrow rotate" : "filter-arrow" } />
          </button>
        </div>

        <div className="shop-category">
          <div className="shop-category-heading">
            <span>SHOP BY</span>
          </div>

          <div className="shop-category-list">
            {categories.map((category) => (
              <button key={category} type="button" className={ selectedCategory === category ? "active" : "" } onClick={() => setSelectedCategory(category)} >
                {category}
              </button>
            ))}
          </div>
        </div>

        {showFilter && (
          <div className="shop-filter-panel">
            <div className="shop-filter-header">
              <div>
                <span>REFINE YOUR SEARCH</span>
                <h3>Filter Products</h3>
              </div>

              <button type="button" className="shop-filter-close" onClick={() => setShowFilter(false)} aria-label="Close filter" >
                <X size={19} />
              </button>
            </div>

            <div className="shop-filter-content">
              <div className="filter-group">
                <h4>CATEGORY</h4>

                <div className="filter-options">
                  {categories.map((category) => (
                    <label key={category} className="filter-option" >
                      <input type="radio" name="filter-category" checked={ selectedCategory === category  } onChange={() => setSelectedCategory(category) } />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4>PRICE RANGE</h4>

                <div className="filter-options">
                  {priceOptions.map((price) => (
                    <label key={price} className="filter-option" >
                      <input type="radio" name="filter-price" checked={selectedPrice === price}
                        onChange={() => setSelectedPrice(price) } />
                      <span>{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4>DISCOUNT</h4>

                <div className="filter-options">
                  {discountOptions.map((discount) => (
                    <label key={discount} className="filter-option" >
                      <input type="radio" name="filter-discount" checked={ selectedDiscount === discount }
                        onChange={() => setSelectedDiscount(discount) } />
                      <span>{discount}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="shop-filter-footer">
              <button type="button" className="filter-clear-button" onClick={clearFilters} >
                CLEAR ALL
              </button>

              <button type="button" className="filter-apply-button" onClick={() => setShowFilter(false)} >
                APPLY FILTERS
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section2;