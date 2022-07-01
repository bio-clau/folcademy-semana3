import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function State() {
  let input = "";
  const [state, setState] = useState("");
  const [count, setCount] = useState(0);
  function handleChange(e) {
    //primero probar con variable y despues con estado
    input = e.target.value;
    //asignacion normal
    setState(e.target.value);
  }
  function handleAdd() {
    //asignacion dependeinte del estado anterior
    setCount((prevState) => prevState + 1);
  }
  return (
    <div className={styles.main}>
      <h3>Estados vs Variables</h3>
      <input type="text" onChange={handleChange} />
      <h3>Variable: {input}</h3>
      <h3>Estado: {state}</h3>
      <h3>Contador: {count}</h3>
      <button className={styles.boton} onClick={handleAdd}>
        +
      </button>
      <button className={styles.boton}>
        <Link href="/hooks">Back</Link>
      </button>
    </div>
  );
}

export default State;
