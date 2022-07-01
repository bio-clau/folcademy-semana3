import Link from "next/link";
import styles from "../styles/Home.module.css";

function Bienvenida() {
  return (
    <div className={styles.main}>
      <h1>Front End React Developer</h1>
      <h2>Bienvenidos!!</h2>
      <button className={styles.boton}>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}

export default Bienvenida;
