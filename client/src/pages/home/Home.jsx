import React, { useEffect, useState } from 'react'

import Banner from '../../sections/homesection/homeFirst/Banner'
import Category from '../../sections/homesection/homesecond/Category'
import Products from '../../sections/homesection/homethird/Products'
import Section4 from '../../sections/homesection/homefourth/Section4'
import Section5 from '../../sections/homesection/homefifth/Section5'

import { getCategories, getProducts, getWishlist, addToWishlist, removeFromWishlist, addToCart, getCart, removeFromCart } from '../../api/apiService'

const Home = () => {

  const [categories, setCategories] = useState([]);

  const handleGetCategories = async () => {
    try {
      const res = await getCategories();
      console.log(res);
      setCategories(res);
    }
    catch (err) {
      console.log(err);
    }
  }

  const [products, setProduts] = useState([]);

  const handleGetProducts = async () => {
    try {
      const res = await getProducts(4);
      setProduts(res);
    }
    catch (err) {
      console.log(err);
    }
  }

  const [wishlistIds, setWishlistIds] = useState([]);

  const handleGetWishlist = async () => {
    try {
      const res = await getWishlist();

      if (res && res.items) {
        const ids = res.items
          .filter(item => item.item)
          .map(item => item.item._id);

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
      }
      else {
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

  const [carts, setCarts] = useState([]);

  const handleGetCart = async () => {
    try {
      const res = await getCart();

      if (res && res.items) {
        const ids = res.items
          .filter(item => item.product)
          .map(item => item.product._id);

        setCarts(ids);
      }
      else {
        setCarts([]);
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleCart = async (productId) => {
    try {
      if (carts.includes(productId)) {
        const res = await removeFromCart(productId);

        if (res && res.success) {
          setCarts(prev =>
            prev.filter(id => id !== productId)
          );
        }
      }
      else {
        const res = await addToCart(productId);

        if (res && res.success) {
          setCarts(prev => [...prev, productId]);
        }
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetCategories();
    handleGetProducts();
    handleGetWishlist();
    handleGetCart();
  }, [])

  return (
    <div>
      <Banner />
      <Category categories={categories} />
      <Products
        products={products}
        wishlistIds={wishlistIds}
        handleWishlist={handleWishlist}
        carts={carts}
        handleCart={handleCart}
      />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default Home