import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Useref() {
  const referencia = useRef(0);
  const [count, setCount] = useState(0);
  function handleAddState() {
    setCount((prevState) => prevState + 1);
  }
  function handleAddRef() {
    referencia.current = referencia.current + 1;
  }

  return (
    <div className={styles.main}>
      <h3>Estados vs Refs</h3>
      <h3>Contador Estado: {count}</h3>
      <h3>Contador Ref: {referencia.current}</h3>
      <button className={styles.boton} onClick={handleAddState}>
        estado
      </button>
      <button className={styles.boton} onClick={handleAddRef}>
        ref
      </button>
      <button className={styles.boton}>
        <Link href="/hooks">Back</Link>
      </button>
    </div>
  );
}

export default Useref;
