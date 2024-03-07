import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import Gallery from "../../components/gallery";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="content">
          <Banner
            src="./banner-img.png"
            title="Chez vous, partout et ailleurs"
          />
          <Gallery />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
