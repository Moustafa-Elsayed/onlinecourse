import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";
import theme from "@/styles/theme";
import CustomButton from "@/components/shared/CustomButton";
import Course1 from "../../../../public/Image/course1.png";
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
}) => {
  console.log("photos", photos[0]);

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
      quantity: 1,
    });
  };
  return (
    <Card sx={{ maxWidth: "100%", height: "auto", p: 2, height: "550px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            aspectRatio: "16/9",
          }}
        >
          <Image
            src={`${MainUrl}${photos[0]}`}
            alt="courseimage"
            layout="fill"
            objectFit="cover"
            priority
            style={{
              borderRadius: "10px",
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
              mt: 1,
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
        <Box sx={{ mt: 1, mb: 3 }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <CustomButton
          title={"Get It Now"}
          backgroundColor={theme.palette.primary.light}
          width="100%"
          fontWeight={"bold"}
          sx={{ mt: 2 }}
          onClick={handleAddToCart}
          loading={true}
        />
      </Box>
    </Card>
  );
};

export default CourseCard;
