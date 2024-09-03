import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";
import theme from "@/styles/theme";
import CustomButton from "@/components/shared/CustomButton";
import { MainUrl } from "@/lib/api/constants";

const CourseCard = ({
  _id,
  title,
  duration,
  level,
  instructor,
  description,
  subtitle,
  addToCart,
  photos,
  price
}) => {
  console.log("photos",photos);
  
  const handleAddToCart = () => {
    addToCart({
      _id,
      title,
      duration,
      level,
      instructor,
      description,
      subtitle,
      photos,
      price,
      quantity: 1,
    });
  };

  return (
    <Card sx={{ maxWidth: "100%", height: "100%", p: 2, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            aspectRatio: "16/9",
            mb: 1,
          }}
        >
          <Image
            src={photos[0]}
            alt="courseimage"
            layout="fill"
            priority
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 0.4,
              flexDirection: "row",
              mb: 1,
            }}
          >
            <CustomButton
              title={duration}
              backgroundColor={theme.palette.primary.light}
              border="1px solid #e9e3e3"
              fontSize="12px"
            />
            <CustomButton
              title={level}
              border="1px solid #e9e3e3"
              backgroundColor={theme.palette.primary.light}
              fontSize="12px"
            />
            <CustomButton
            title={`$ ${price}`}
            border="1px solid #e9e3e3"
              backgroundColor={theme.palette.primary.light}
              fontSize="12px"
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              By {instructor}
            </Typography>
          </Box>
        </Box>

        {/* Content Section with flexGrow to take up remaining space */}
        <Box sx={{ flexGrow: 1, justifyContent:"center", mt: 1, mb: 3 }}>
          <Typography variant="title" sx={{ fontWeight: "bold", mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="h4" color="text.secondary">
            {subtitle}
          </Typography>   
        </Box>

        {/* Button aligned at the bottom */}
        <CustomButton
          title={"Get It Now"}
          backgroundColor={theme.palette.primary.light}
          width="100%"
          fontWeight={"bold"}
          sx={{ mt: "auto" }} 
          onClick={handleAddToCart}
          loading={true}
        />
      </Box>
    </Card>
  );
};

export default CourseCard;
