import React from "react";
import { ProductProps } from "./Product";
import styles from "./ProductCard.module.css";
import { BsCart2 } from "react-icons/bs";

export const ProductCard = (props: ProductProps) => {
  return (
    <div className={styles.conteiner}>
      <img src={props.image} />
      <a>{props.name}</a>
      <button>
        {props.price}
        <BsCart2 />
      </button>
    </div>
  );
};
