import React from "react";
import styles from "./Home.module.css";
import AllProducts from "../Products/AllProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <p> Logra tu bienestar con nuestros productos premium</p>
        <p> Hecho en Argentina | Organico | Primer calidad</p>
        <Link to="/products">
          <button> COMPRA AHORA </button>
        </Link>
      </div>
      <div className={styles.productsTitle}>
        <h4>Te va a encantar</h4>
        <h1>Compra nuestros aceites premium, gomitas y cápsulas</h1>
      </div>
      <div className={styles.products}>
        <AllProducts />
      </div>
    </div>
  );
};

export default Home;
