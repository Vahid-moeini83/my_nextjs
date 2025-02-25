// Components
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import ScrollUpBtn from "./ScrollUpBtn";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <ScrollUpBtn />
    </>
  );
}

export default Layout;
