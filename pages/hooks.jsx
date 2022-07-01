import Link from "next/link";
import styles from "../styles/Home.module.css";
function hooks() {
  return (
    <div className={styles.main}>
      <h2>Hooks</h2>
      <ol className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/usestate">useState</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/lifecycle">useEffect</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/useref">useRef</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/usecontext">useContext</Link>
        </li>
      </ol>
      <button className={styles.boton}>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}

export default hooks;
