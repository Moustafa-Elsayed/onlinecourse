import Achievements from "@/components/aboutus/Achievements";
import CallToAction from "@/components/aboutus/CallToAction";
import Goals from "@/components/aboutus/Goals";
import PageTitle from "@/components/shared/PageTitle";
import React from "react";

const index = () => {
  return (
    <>
      <PageTitle
        title={"About Skillbridge"}
        subTitle={
          "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
        }
      />
      <Achievements />
      <Goals />
      <CallToAction /> 
    </>
  );
};

export default index;
