import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/index";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";

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
