import React from "react";
import style from "../styles/context.module.css";
import { useTheme } from "../context/theme";

function Usecontext() {
  const { theme } = useTheme();
  return (
    <div className={style.padre}>
      <div className={theme ? style.hijolight : style.hijodark}>
        algo de texto
      </div>
    </div>
  );
}

export default Usecontext;
