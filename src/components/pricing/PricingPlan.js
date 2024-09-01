import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import CustomCard from "./CustomCard";
import { PricingFree, PricingPro } from "@/lib/dummyData/pricing/Pricingplan";

const freeplan = PricingFree;
const Proplan = PricingPro;

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            p: 1,
            borderRadius: 2,
            display: "flex",
            gap: 1,
          }}
        >
          <CustomButton
            title="Monthly"
            active={activeTab === "monthly"}
            onClick={() => handleTabChange("monthly")}
            ml="2"
            backgroundColor={
              activeTab === "monthly"
                ? theme.palette.secondary.main
                : "tranparent"
            }
          />
          <CustomButton
            title="Yearly"
            active={activeTab === "yearly"}
            onClick={() => handleTabChange("yearly")}
            backgroundColor={
              activeTab === "yearly"
                ? theme.palette.secondary.main
                : "tranparent"
            }
          />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", borderRadius: 2, mt: 4 ,pt:3,p:3}}>
        {activeTab === "yearly" ? (
          <Box sx={{ flexGrow: 1, pb: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <CustomCard
                  Plan={"Free"}
                  price={"0"}
                  features={freeplan}
                  type={"Month"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <CustomCard
                  Plan={"Pro"}
                  price={"120"}
                  features={Proplan}
                  type={"Year"}
                />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1, pb: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <CustomCard
                  Plan={"Free"}
                  price={"0"}
                  features={freeplan}
                  type={"Month"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <CustomCard
                  Plan={"Pro"}
                  price={"79"}
                  features={Proplan}
                  type={"Year"}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PricingPlan;
