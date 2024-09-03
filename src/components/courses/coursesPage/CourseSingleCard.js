import { Box } from "@mui/material";
import React from "react";
import CourseTitle from "./CourseTitle";
import ImageGrid from "./ImageGrid";
import Curriculum from "./Curriculum";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";

const CourseSingleCard = ({
  title,
  subtitle,
  curriculum,
  duration,
  level,
  instructor,
  _id,
  photos,
  price,
}) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(
      addItem({
        _id,
        title,
        duration,
        level,
        instructor,
        subtitle,
        photos,
        price,
        quantity: 1,
      })
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box>
          <CourseTitle title={title} subtitle={subtitle} _id={_id} />
        </Box>
        <Box>
          <ImageGrid
            instructor={instructor}
            duration={duration}
            level={level}
            photos={photos}
            price={price}
          />
        </Box>
        <Box>
          <Curriculum curriculum={curriculum} />
        </Box>
        <Box sx={{ textAlign: "center", mt:2 }}>
          <CustomButton
            title={"Get It Now"}
            backgroundColor={theme.palette.primary.light}
            width="100%"
            fontWeight={"bold"}
            sx={{ mt: "auto" }}
            onClick={handleAdd}
            loading={true}
            border={"1px solid #e9e3e3"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseSingleCard;
