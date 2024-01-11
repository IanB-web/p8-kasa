import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="content">
          <Banner  src="./banner-img.png" title="Chez vous, partout et ailleurs"/>
          <Gallery />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;