import React from "react";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.VFC<LayoutProps> = ({ children }) => {
  const layout = {
    margin: "0 auto",
    width: "100%",
    height: "100%",
    background: "rgb(204, 227, 232)",
  };

  const mainStyle = {
    marginTop: "10%",
    width: "100%",
    height: "100%",
  };

  const scrollBackground = () => {
    window.addEventListener("scroll", function () {
      let scroll = window.pageYOffset;

      if (scroll > 4000) {
        document.body.style.backgroundColor = "#FFAB00";
      } else if (scroll > 3000) {
        document.body.style.backgroundColor = "#43A047";
      } else if (scroll > 2000) {
        document.body.style.backgroundColor = "#FF6F00";
      } else if (scroll > 1000) {
        document.body.style.backgroundColor = "#0091EA";
      } else {
        document.body.style.backgroundColor = "#FF4081";
      }
    });
  };

  return (
    <div style={layout}>
      {scrollBackground}
      <Header></Header>
      <main style={mainStyle}>
        {children}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
