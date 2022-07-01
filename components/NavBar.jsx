import React from "react";
import Image from "next/image";
import style from "../styles/NavBar.module.css";
import folimg from "../public/folcademy.png";
import { useTheme } from "../context/theme";

function NavBar() {
  const { changeTheme } = useTheme();

  return (
    <div className={style.navbar}>
      <Image
        className={style.img}
        layout="fixed"
        height="40px"
        width="200px"
        src={folimg}
        alt="Logo"
      />
      <button onClick={changeTheme} className={style.boton}>
        Theme
      </button>
    </div>
  );
}

export default NavBar;
