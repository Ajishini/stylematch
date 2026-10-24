import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Section1 from "../../sections/productdetailsection/productfirst/Section1";
import Section2 from "../../sections/productdetailsection/productsecond/Section2";
import Section3 from "../../sections/productdetailsection/productthird/Section3";
import dresses from "../../assets/images/dresses.png";
import jumpsuits from "../../assets/images/jumpsuits.png";
import footwear from "../../assets/images/footwear.png";
import bag from "../../assets/images/bags.jpg";
import tops from "../../assets/images/category-tops.png";
import bottoms from "../../assets/images/category-bottoms.png";
import accessories from "../../assets/images/category-accessories.png";
import image12 from "../../assets/images/image12.webp";
import image13 from "../../assets/images/image19.jpg";
import image14 from "../../assets/images/image14.jpg";
import image15 from "../../assets/images/image15.jpg";
import image16 from "../../assets/images/image16.jpg";
import image17 from "../../assets/images/image18.jpg";
import image19 from "../../assets/images/image76.webp";
import image20 from "../../assets/images/image46.webp";
import image21 from "../../assets/images/image21.jpg";
import image22 from "../../assets/images/image22.jpg";
import image23 from "../../assets/images/image23.jpg";
import image24 from "../../assets/images/image24.webp";
import image25 from "../../assets/images/image25.webp";
import image26 from "../../assets/images/image26.webp";
import image27 from "../../assets/images/image27.webp";
import image28 from "../../assets/images/image28.webp";
import image29 from "../../assets/images/image29.webp";
import image30 from "../../assets/images/image30.webp";
import image31 from "../../assets/images/image31.webp";
import image32 from "../../assets/images/image32.webp";
import image33 from "../../assets/images/image33.webp";
import image34 from "../../assets/images/image34.webp";
import image35 from "../../assets/images/image35.webp";
import image36 from "../../assets/images/image36.webp";
import image37 from "../../assets/images/image37.webp";
import image38 from "../../assets/images/image38.webp";
import image39 from "../../assets/images/image39.webp";
import image40 from "../../assets/images/image40.webp";
import image41 from "../../assets/images/image41.webp";
import image42 from "../../assets/images/image42.webp";
import image43 from "../../assets/images/image43.webp";
import image44 from "../../assets/images/image44.webp";
import image45 from "../../assets/images/image45.webp";
import image46 from "../../assets/images/image46.webp";
import image47 from "../../assets/images/image47.webp";
import image48 from "../../assets/images/image48.webp";
import image49 from "../../assets/images/image49.webp";
import image50 from "../../assets/images/image50.webp";
import image51 from "../../assets/images/image51.webp";
import image52 from "../../assets/images/image52.webp";
import image53 from "../../assets/images/image53.webp";
import image54 from "../../assets/images/image54.webp";
import image55 from "../../assets/images/image55.webp";
import image56 from "../../assets/images/image56.webp";
import image57 from "../../assets/images/image57.webp";
import image58 from "../../assets/images/image58.webp";
import image59 from "../../assets/images/image59.webp";
import image60 from "../../assets/images/image60.webp";
import image61 from "../../assets/images/image61.webp";
import image62 from "../../assets/images/image62.webp";
import image63 from "../../assets/images/image63.webp";
import image64 from "../../assets/images/image64.webp";
import image65 from "../../assets/images/image65.jpg";
import image66 from "../../assets/images/image66.webp";
import image67 from "../../assets/images/image67.webp";
import image68 from "../../assets/images/image68.webp";
import image69 from "../../assets/images/image69.webp";
import image70 from "../../assets/images/image70.webp";
import image71 from "../../assets/images/image71.webp";
import image72 from "../../assets/images/image72.webp";
import image73 from "../../assets/images/image73.webp";
import image74 from "../../assets/images/image74.webp";
import image75 from "../../assets/images/image75.webp";
import image76 from "../../assets/images/image76.webp";
import image77 from "../../assets/images/image77.webp";
import image78 from "../../assets/images/image78.webp";
import image79 from "../../assets/images/image79.webp";
import image80 from "../../assets/images/image80.webp";
import image81 from "../../assets/images/image81.webp";
import image82 from "../../assets/images/image82.webp";
import image83 from "../../assets/images/image83.webp";
import image84 from "../../assets/images/image84.webp";
import image85 from "../../assets/images/image85.webp";

const products = [
    {  
      id: 1,
      name: "Floral Midi Dress",
      category: "Dresses",
      price: 2499,
      oldPrice: 3499,
      discount: "29% OFF",
      image: dresses,
    },

    {
      id: 2,
      name: "Tailored Jumpsuit",
      category: "Dresses",
      price: 3299,
      oldPrice: 4299,
      discount: "23% OFF",
      image: jumpsuits,
    },

    {
      id: 3,
      name: "Strappy Heels",
      category: "Footwear",
      price: 2699,
      oldPrice: 3499,
      discount: "23% OFF",
      image: footwear,
    },

    {
      id: 4,
      name: "Leather Shoulder Bag",
      category: "Bags",
      price: 2999,
      oldPrice: 4199,
      discount: "29% OFF",
      image: bag,
    },

    {
      id: 5,
      name: "Essential White Top",
      category: "Tops",
      price: 1499,
      oldPrice: 1999,
      discount: "25% OFF",
      image: tops,
    },

    {
      id: 6,
      name: "Relaxed Bottoms",
      category: "Bottoms",
      price: 1899,
      oldPrice: 2499,
      discount: "24% OFF",
      image: bottoms,
    },

    {
      id: 7,
      name: "Minimal Accessories",
      category: "Accessories",
      price: 999,
      oldPrice: 1399,
      discount: "29% OFF",
      image: accessories,
    },

    {
      id: 8,
      name: "Classic Evening Dress",
      category: "Dresses",
      price: 3899,
      oldPrice: 4999,
      discount: "22% OFF",
      image: image12,
    },

    {
      id: 9,
      name: "Classic Linen Top",
      category: "Tops",
      price: 1599,
      oldPrice: 2199,
      discount: "27% OFF",
      image: image13,
    },

    {
      id: 10,
      name: "Wide Leg Trousers",
      category: "Bottoms",
      price: 1999,
      oldPrice: 2799,
      discount: "29% OFF",
      image: image14,
    },

    {
      id: 11,
      name: "Elegant Evening Dress",
      category: "Dresses",
      price: 3499,
      oldPrice: 4599,
      discount: "24% OFF",
      image: image15,
    },

    {
      id: 12,
      name: "Pearl Statement Earrings",
      category: "Accessories",
      price: 899,
      oldPrice: 1299,
      discount: "31% OFF",
      image: image16,
    },

    {
      id: 13,
      name: "Structured Mini Bag",
      category: "Bags",
      price: 2299,
      oldPrice: 3199,
      discount: "28% OFF",
      image: image17,
    },

    {
      id: 14,
      name: "Classic Casual Sneakers",
      category: "Footwear",
      price: 2499,
      oldPrice: 3299,
      discount: "24% OFF",
      image: image19,
    },


    {
      id: 15,
      name: "Relaxed Fit Shirt",
      category: "Tops",
      price: 1699,
      oldPrice: 2299,
      discount: "26% OFF",
      image: image20,
    },

    {
      id: 16,
      name: "High Waist Straight Pants",
      category: "Bottoms",
      price: 1899,
      oldPrice: 2599,
      discount: "27% OFF",
      image: image21,
    },

    {
      id: 17,
      name: "Satin Party Dress",
      category: "Dresses",
      price: 3799,
      oldPrice: 4999,
      discount: "24% OFF",
      image: image22,
    },

    {
      id: 18,
      name: "Layered Pendant Necklace",
      category: "Accessories",
      price: 799,
      oldPrice: 1199,
      discount: "33% OFF",
      image: image23,
    },

    {
      id: 19,
      name: "Everyday Crossbody Bag",
      category: "Bags",
      price: 1999,
      oldPrice: 2799,
      discount: "29% OFF",
      image: image24,
    },

    {
      id: 20,
      name: "Minimal Block Heels",
      category: "Footwear",
      price: 2599,
      oldPrice: 3499,
      discount: "26% OFF",
      image: image25,
    },


    {
      id: 21,
      name: "Premium Basic Top",
      category: "Tops",
      price: 1399,
      oldPrice: 1899,
      discount: "26% OFF",
      image: image26,
    },

    {
      id: 22,
      name: "Pleated Wide Leg Pants",
      category: "Bottoms",
      price: 2199,
      oldPrice: 2999,
      discount: "27% OFF",
      image: image27,
    },

    {
      id: 23,
      name: "Floral Summer Dress",
      category: "Dresses",
      price: 2899,
      oldPrice: 3799,
      discount: "24% OFF",
      image: image28,
    },

    {
      id: 24,
      name: "Delicate Gold Bracelet",
      category: "Accessories",
      price: 1099,
      oldPrice: 1499,
      discount: "27% OFF",
      image: image29,
    },

    {
      id: 25,
      name: "Quilted Shoulder Bag",
      category: "Bags",
      price: 2799,
      oldPrice: 3899,
      discount: "28% OFF",
      image: image30,
    },

    {
      id: 26,
      name: "Pointed Toe Flats",
      category: "Footwear",
      price: 2299,
      oldPrice: 2999,
      discount: "23% OFF",
      image: image31,
    },


    {
      id: 27,
      name: "Oversized Cotton Shirt",
      category: "Tops",
      price: 1799,
      oldPrice: 2399,
      discount: "25% OFF",
      image: image32,
    },

    {
      id: 28,
      name: "Relaxed Cargo Pants",
      category: "Bottoms",
      price: 2399,
      oldPrice: 3199,
      discount: "25% OFF",
      image: image33,
    },

    {
      id: 29,
      name: "Modern Wrap Dress",
      category: "Dresses",
      price: 3199,
      oldPrice: 4299,
      discount: "26% OFF",
      image: image34,
    },

    {
      id: 30,
      name: "Classic Hoop Earrings",
      category: "Accessories",
      price: 699,
      oldPrice: 999,
      discount: "30% OFF",
      image: image35,
    },

    {
      id: 31,
      name: "Elegant Tote Bag",
      category: "Bags",
      price: 2499,
      oldPrice: 3399,
      discount: "26% OFF",
      image: image36,
    },

    {
      id: 32,
      name: "Everyday Running Sneakers",
      category: "Footwear",
      price: 2799,
      oldPrice: 3599,
      discount: "22% OFF",
      image: image37,
    },


    {
      id: 33,
      name: "Ribbed Knit Top",
      category: "Tops",
      price: 1299,
      oldPrice: 1799,
      discount: "28% OFF",
      image: image38,
    },

    {
      id: 34,
      name: "Classic Denim Jeans",
      category: "Bottoms",
      price: 2099,
      oldPrice: 2799,
      discount: "25% OFF",
      image: image39,
    },

    {
      id: 35,
      name: "Elegant Midi Dress",
      category: "Dresses",
      price: 3599,
      oldPrice: 4699,
      discount: "23% OFF",
      image: image40,
    },

    {
      id: 36,
      name: "Minimal Chain Necklace",
      category: "Accessories",
      price: 899,
      oldPrice: 1299,
      discount: "31% OFF",
      image: image41,
    },

    {
      id: 37,
      name: "Soft Leather Handbag",
      category: "Bags",
      price: 3299,
      oldPrice: 4499,
      discount: "27% OFF",
      image: image42,
    },

    {
      id: 38,
      name: "Strappy Summer Sandals",
      category: "Footwear",
      price: 1899,
      oldPrice: 2599,
      discount: "27% OFF",
      image: image43,
    },


    {
      id: 39,
      name: "Silk Blend Blouse",
      category: "Tops",
      price: 2299,
      oldPrice: 2999,
      discount: "23% OFF",
      image: image44,
    },

    {
      id: 40,
      name: "Straight Fit Trousers",
      category: "Bottoms",
      price: 1999,
      oldPrice: 2699,
      discount: "26% OFF",
      image: image45,
    },

    {
      id: 41,
      name: "Printed Day Dress",
      category: "Dresses",
      price: 2999,
      oldPrice: 3999,
      discount: "25% OFF",
      image: image46,
    },

    {
      id: 42,
      name: "Crystal Drop Earrings",
      category: "Accessories",
      price: 1199,
      oldPrice: 1699,
      discount: "29% OFF",
      image: image47,
    },

    {
      id: 43,
      name: "Classic Structured Bag",
      category: "Bags",
      price: 2899,
      oldPrice: 3899,
      discount: "26% OFF",
      image: image48,
    },

    {
      id: 44,
      name: "Classic White Sneakers",
      category: "Footwear",
      price: 2599,
      oldPrice: 3299,
      discount: "21% OFF",
      image: image49,
    },


    {
      id: 45,
      name: "Cropped Casual Top",
      category: "Tops",
      price: 1199,
      oldPrice: 1699,
      discount: "29% OFF",
      image: image50,
    },

    {
      id: 46,
      name: "Comfort Fit Joggers",
      category: "Bottoms",
      price: 1799,
      oldPrice: 2399,
      discount: "25% OFF",
      image: image51,
    },

    {
      id: 47,
      name: "Pleated Occasion Dress",
      category: "Dresses",
      price: 3999,
      oldPrice: 5299,
      discount: "25% OFF",
      image: image52,
    },

    {
      id: 48,
      name: "Pearl Bracelet Set",
      category: "Accessories",
      price: 999,
      oldPrice: 1399,
      discount: "29% OFF",
      image: image53,
    },

    {
      id: 49,
      name: "Compact Crossbody Bag",
      category: "Bags",
      price: 2199,
      oldPrice: 2999,
      discount: "27% OFF",
      image: image54,
    },

    {
      id: 50,
      name: "Elegant Slingback Heels",
      category: "Footwear",
      price: 2999,
      oldPrice: 3999,
      discount: "25% OFF",
      image: image55,
    },


    {
      id: 51,
      name: "Classic V Neck Top",
      category: "Tops",
      price: 1499,
      oldPrice: 1999,
      discount: "25% OFF",
      image: image56,
    },

    {
      id: 52,
      name: "Relaxed Linen Pants",
      category: "Bottoms",
      price: 2099,
      oldPrice: 2799,
      discount: "25% OFF",
      image: image57,
    },

    {
      id: 53,
      name: "Elegant Black Dress",
      category: "Dresses",
      price: 3699,
      oldPrice: 4899,
      discount: "24% OFF",
      image: image58,
    },

    {
      id: 54,
      name: "Modern Layered Earrings",
      category: "Accessories",
      price: 899,
      oldPrice: 1299,
      discount: "31% OFF",
      image: image59,
    },

    {
      id: 55,
      name: "Soft Everyday Tote",
      category: "Bags",
      price: 2399,
      oldPrice: 3199,
      discount: "25% OFF",
      image: image60,
    },

    {
      id: 56,
      name: "Chunky Casual Sneakers",
      category: "Footwear",
      price: 2699,
      oldPrice: 3599,
      discount: "25% OFF",
      image: image61,
    },


    {
      id: 57,
      name: "Elegant Satin Top",
      category: "Tops",
      price: 1899,
      oldPrice: 2599,
      discount: "27% OFF",
      image: image62,
    },

    {
      id: 58,
      name: "Tailored Ankle Pants",
      category: "Bottoms",
      price: 2199,
      oldPrice: 2899,
      discount: "24% OFF",
      image: image63,
    },

    {
      id: 59,
      name: "Flowy Maxi Dress",
      category: "Dresses",
      price: 3299,
      oldPrice: 4399,
      discount: "25% OFF",
      image: image64,
    },

    {
      id: 60,
      name: "Gold Minimalist Ring",
      category: "Accessories",
      price: 799,
      oldPrice: 1199,
      discount: "33% OFF",
      image: image65,
    },

    {
      id: 61,
      name: "Premium Shoulder Bag",
      category: "Bags",
      price: 3099,
      oldPrice: 4199,
      discount: "26% OFF",
      image: image66,
    },

    {
      id: 62,
      name: "Low Top Fashion Sneakers",
      category: "Footwear",
      price: 2499,
      oldPrice: 3299,
      discount: "24% OFF",
      image: image67,
    },


    {
      id: 63,
      name: "Classic Striped Top",
      category: "Tops",
      price: 1399,
      oldPrice: 1899,
      discount: "26% OFF",
      image: image68,
    },

    {
      id: 64,
      name: "High Rise Mom Jeans",
      category: "Bottoms",
      price: 2299,
      oldPrice: 2999,
      discount: "23% OFF",
      image: image69,
    },

    {
      id: 65,
      name: "Romantic Floral Dress",
      category: "Dresses",
      price: 3399,
      oldPrice: 4499,
      discount: "24% OFF",
      image: image70,
    },

    {
      id: 66,
      name: "Classic Pendant Necklace",
      category: "Accessories",
      price: 899,
      oldPrice: 1299,
      discount: "31% OFF",
      image: image71,
    },

    {
      id: 67,
      name: "Elegant Mini Handbag",
      category: "Bags",
      price: 2599,
      oldPrice: 3499,
      discount: "26% OFF",
      image: image72,
    },

    {
      id: 68,
      name: "Platform Casual Shoes",
      category: "Footwear",
      price: 2899,
      oldPrice: 3799,
      discount: "24% OFF",
      image: image73,
    },


    {
      id: 69,
      name: "Soft Knit Sweater",
      category: "Tops",
      price: 2199,
      oldPrice: 2999,
      discount: "27% OFF",
      image: image74,
    },

    {
      id: 70,
      name: "Relaxed Straight Jeans",
      category: "Bottoms",
      price: 2399,
      oldPrice: 3199,
      discount: "25% OFF",
      image: image75,
    },

    {
      id: 71,
      name: "Chic Cocktail Dress",
      category: "Dresses",
      price: 3899,
      oldPrice: 5199,
      discount: "25% OFF",
      image: image76,
    },

    {
      id: 72,
      name: "Statement Gold Earrings",
      category: "Accessories",
      price: 1099,
      oldPrice: 1499,
      discount: "27% OFF",
      image: image77,
    },

    {
      id: 73,
      name: "Classic Leather Tote",
      category: "Bags",
      price: 3199,
      oldPrice: 4299,
      discount: "26% OFF",
      image: image78,
    },

    {
      id: 74,
      name: "Modern Platform Heels",
      category: "Footwear",
      price: 2999,
      oldPrice: 3999,
      discount: "25% OFF",
      image: image79,
    },


    {
      id: 75,
      name: "Minimal Ribbed Top",
      category: "Tops",
      price: 1299,
      oldPrice: 1799,
      discount: "28% OFF",
      image: image80,
    },

    {
      id: 76,
      name: "Relaxed Fit Trousers",
      category: "Bottoms",
      price: 2099,
      oldPrice: 2799,
      discount: "25% OFF",
      image: image81,
    },

    {
      id: 77,
      name: "Elegant Occasion Dress",
      category: "Dresses",
      price: 4199,
      oldPrice: 5499,
      discount: "24% OFF",
      image: image82,
    },

    {
      id: 78,
      name: "Delicate Pearl Necklace",
      category: "Accessories",
      price: 999,
      oldPrice: 1399,
      discount: "29% OFF",
      image: image83,
    },

    {
      id: 79,
      name: "Everyday Shopper Bag",
      category: "Bags",
      price: 2299,
      oldPrice: 3099,
      discount: "26% OFF",
      image: image84,
    },

    {
      id: 80,
      name: "Classic Court Shoes",
      category: "Footwear",
      price: 2799,
      oldPrice: 3699,
      discount: "24% OFF",
      image: image85,
    }
];


const Productdetails = () => {

  const { id } = useParams();

  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);

  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {

    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
        }}>
        <h2>
          Product not found
        </h2>
      </div>
    );

  }

  return (
    <div>
      <Section1 product={product} />
      <Section2 product={product} />
      <Section3 products={products} currentProductId={product.id} />
    </div>
  );
};


export default Productdetails;