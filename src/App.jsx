// import "./App.css";
import NavBar from "../src/components/navbar/NavBar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { GlobalStyle } from "./components/styled/style";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Main />
      <Footer author="Michael Bridgeman" />
    </>
  );
}

export default App;
