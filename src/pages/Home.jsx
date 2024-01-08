import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="content">
          <Banner />
          <Gallery />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
