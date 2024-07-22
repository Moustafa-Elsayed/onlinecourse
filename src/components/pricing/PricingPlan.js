import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";

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
        <Box sx={{ backgroundColor: "white", p: 1, borderRadius: 2 ,display:"flex",gap:1}}>
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
      {activeTab === "yearly" ? (
        <Box>Yearly data</Box>
      ) : (
        <Box>Monthly data</Box>
      )}
    </Box>
  );
};

export default PricingPlan;
