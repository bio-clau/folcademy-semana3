import React from "react";
import styles from "../../styles/Home.module.css";

function Hijo2(props) {
  return (
    <div>
      <button className={styles.boton} onClick={props.handleClick}>
        handleClick
      </button>
      <br />
      <br />
      <button
        className={styles.boton}
        onClick={() => props.handleClickArg("mensaje desde handleClickArg")}>
        handleClickArg
      </button>
    </div>
  );
}

export default Hijo2;
