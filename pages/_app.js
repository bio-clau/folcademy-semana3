import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "../context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
