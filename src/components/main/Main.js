import React from "react";

//
import CallToAction from "../callToAction";
import MenuSpecials from "../menuSpecials";
import Testimonials from "../testimonials";

//

const Main = (props) => {
  return (
    <>
      <CallToAction>{props.children}</CallToAction>
      <MenuSpecials />
      <Testimonials />
    </>
  );
};

export default Main;
