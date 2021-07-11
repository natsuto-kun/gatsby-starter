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
  };

  const mainStyle = {
    marginTop: "10%",
  };

  return (
    <div style={layout}>
      <Header></Header>
      <main style={mainStyle}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
