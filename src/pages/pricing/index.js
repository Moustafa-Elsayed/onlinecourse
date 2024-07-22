import PricingPlan from "@/components/pricing/PricingPlan";
import DividerWithText from "@/components/shared/DividerWithText";
import PageTitle from "@/components/shared/PageTitle";
import { Box } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <PageTitle
        title={"Our Pricings"}
        subTitle={
          "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        }
      />
      <Box sx={{ mt: 2, display: { xs: "none", sm: "none", md: "block" } }}>
        <DividerWithText />
      </Box>
      <Box>
        <PricingPlan />
      </Box>
    </>
  );
};

export default index;
