import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [menu, setMenu] = useState([
    "Membresía",
    "Calidad",
    "Tienda",
    "Beneficios",
    "Contactanos",
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.encabezado}>
        Descuento de 5% para compras mayores a $5000
      </div>
      <div className={styles.menu}>
        <p className={styles.logo}>logo</p>
        <p className={styles.options}>
          {menu.map((option) => (
            <Link key={option} className={styles.menuOption} to={"/" + option}>
              {option}
            </Link>
          ))}
        </p>
        <p>carrito</p>
        <p>COMPRA AHORA</p>
      </div>
    </div>
  );
};

export default NavBar;
