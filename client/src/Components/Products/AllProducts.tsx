import React, { useState, useEffect } from "react";
import { Product, ProductProps } from "./Product";
import { getProducts } from "./ProductServices";
import { ProductCard } from "./ProductCard";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    setAllProducts(await getProducts());
  };

  useEffect(() => {
    fetchProducts();
    console.log(allProducts);
  }, []);
  return (
    <div className={styles.conteiner}>
      {allProducts.length ? (
        allProducts.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            image={product.images[0]}
            price={product.price}
          />
        ))
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};

export default AllProducts;
