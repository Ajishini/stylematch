import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Section1 from "../../sections/productdetailsection/productfirst/Section1";
import Section2 from "../../sections/productdetailsection/productsecond/Section2";
import Section3 from "../../sections/productdetailsection/productthird/Section3";

import { getProductById } from "../../api/apiService";

const Productdetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        console.log(id);

        const data = await getProductById(id);

        console.log(data);

        if (!data) {
          setProduct(null);
          return;
        }

        setProduct({
          ...data,
          id: data._id,
          price: data.actualprice,
          oldPrice: data.originalprice,
          discount: data.discount
        });

      } catch (error) {
        console.log(error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

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
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Section1 product={product} />
      <Section2 product={product} />
      <Section3 products={[]} currentProductId={product._id} />
    </div>
  );
};

export default Productdetails;
