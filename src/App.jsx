import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components/layout/Navbar";
import { HamburgerMenu } from "./components/layout/HamburgerMenu";

// import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HamburgerMenu/>
      
      {/* <Footer /> */}
    </>
  );
}


