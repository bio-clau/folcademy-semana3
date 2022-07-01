import Link from "next/link";
import style from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

function LifeCycle() {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  //montado
  useEffect(() => {
    console.log("primer render");
  }, []);

  //re-render
  useEffect(() => {
    console.log("actualizacion");
  });

  //render condicional a una variable
  useEffect(() => {
    console.log("actualizacion dependiente de val2");
  }, [val2]);

  //desmontado
  useEffect(() => {
    return () => {
      console.log("desmontar");
    };
  }, []);

  function handleChange() {
    val % 2 === 0 && setVal2((prev) => prev + 1);
    setVal((prev) => prev + 1);
  }

  return (
    <div className={style.main}>
      <h1>LifeCycle</h1>
      <h2>Contador: {val}</h2>
      <h2>Valor 2: {val2}</h2>
      <button className={style.boton} onClick={handleChange}>
        +
      </button>
      <br />
      <button className={style.boton}>
        <Link href="/hooks">Back</Link>
      </button>
    </div>
  );
}

export default LifeCycle;
