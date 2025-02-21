// Components
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./Main";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
