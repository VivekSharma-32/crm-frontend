import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="default-layout">
        <div className="header">
          <Header />
        </div>
        <main className="main">{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
