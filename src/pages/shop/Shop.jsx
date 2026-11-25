import React, { useMemo, useState, useEffect } from "react";

import Section1 from "../../sections/shopsection/shopfirst/Section1";
import Section2 from "../../sections/shopsection/shopsecond/Section2";
import Section3 from "../../sections/shopsection/shopthird/Section3";

import { getProducts, getCategories, getWishlist, addToWishlist, removeFromWishlist } from '../../api/apiService'

const Shop = () => {

  const [categories, setCategories] = useState([]);
  const [products, setProduts] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const handleGetCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res || []);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleGetProducts = async (search = "", category = "All") => {
    try {
      const res = await getProducts(100, search, category);
      console.log(res);
      setProduts(res || []);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleGetWishlist = async () => {
    try {
      const res = await getWishlist();

      if (res) {
        const ids = res.items
          .filter(item => item.product)
          .map(item => item.product._id);

        setWishlistIds(ids);
      } 
        else {
        setWishlistIds([]);
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleWishlist = async (productId) => {
    try {
      if (wishlistIds.includes(productId)) {

        const res = await removeFromWishlist(productId);

        if (res && res.success) {
          setWishlistIds(prev =>
            prev.filter(id => id !== productId)
          );
        }

      } else {

        const res = await addToWishlist(productId);

        if (res && res.success) {
          setWishlistIds(prev => [...prev, productId]);
        }

      }
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetProducts(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    handleGetCategories();
    handleGetWishlist();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.actualprice - b.actualprice);
    }

    if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.actualprice - a.actualprice);
    }

    if (sortBy === "Discount") {
      result.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
    }

    return result;

  }, [products, sortBy]);

  return (
    <main className="shop-page">
      <Section1 />

      <Section2
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />

      <Section3
        productsToShow={filteredProducts}
        sortBy={sortBy}
        setSortBy={setSortBy} 
        wishlistIds={wishlistIds}
        handleWishlist={handleWishlist}
      />

    </main>
  );
};

export default Shop;