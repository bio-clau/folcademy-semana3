import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Folcademy</title>
        <meta
          name="description"
          content="Semana 03, Entrenamiento Front End React Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a Entrenamiento Front End React Developer
        </h1>
        <p className={styles.description}>
          Semana 03: Componentes, propiedades y estados del mismo
        </p>
        <p className={styles.list}>Temas:</p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/components">Componentes</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/props">Props</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/hooks">Hooks</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
