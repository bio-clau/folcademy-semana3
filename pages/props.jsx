import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import data from "../public/data.json";
import Hijo3 from "../components/props/Hijo3";
import Hijo1 from "../components/props/Hijo1";
import Hijo2 from "../components/props/Hijo2";

function Props() {
  function handleClick() {
    console.log("click!!");
  }
  function handleClickArg(msg) {
    console.log(msg);
  }
  return (
    <div className={styles.main}>
      <h1>Componente Padre</h1>
      <Hijo1 mensaje="Hola Mundo!" />
      <br />
      <br />
      <Hijo2 handleClick={handleClick} handleClickArg={handleClickArg} />
      <br />
      <br />
      <ul>
        {data.map((p, i) => (
          <Hijo3 key={i} pokemon={p.name} />
        ))}
      </ul>
      <br />
      <br />
      <button className={styles.boton}>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}

export default Props;
