import React from "react";

//
import Header from "../components/header";
import Main from "../components/main";
import HomePageIntroduction from "../components/homePageIntroduction";
import Footer from "../components/footer";

//

const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <HomePageIntroduction />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
