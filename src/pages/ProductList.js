import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Layout from "../components/Layout/Layout";
import { getProductsBySlug } from "../redux/actions";
import { generatePublicUrl } from "../urlConfig";

const ProductList = (props) => {
  const dispatch = useDispatch();

  const priceRange = {
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  };
  const product = useSelector((state) => state.product);

  const { slug } = useParams();
  useEffect(() => {
    dispatch(getProductsBySlug(slug));
  }, []);
  return (
    <div>
      <Layout>
        {Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div>
                  {slug} Mobile under {priceRange[key]}
                </div>
                <button>View All</button>
              </div>
              <div className="d-flex">
                {product.productsByPrice[key].map((product) => (
                  <div className="product-container mx-2">
                    <div className="product-img-container mt-2 mx-auto">
                      <img
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt=""
                      />
                    </div>
                    <div className="text-center product-details">
                      <div className="my-1">{product.name}</div>
                      <div>
                        {" "}
                        <span>4.3</span>&nbsp;
                        <span>3353</span>
                      </div>
                      <div className="price fw-bold">{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export default ProductList;
