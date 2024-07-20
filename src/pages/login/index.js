import { Box, Typography } from "@mui/material";
import React from "react";
import Person from "../../../public/Image/Image.png";
import Image from "next/image";
import CustomButton from "@/components/shared/CustomButton";

const index = () => {
  return (
    <Box
      sx={{
       
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "Center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography>Students Testimonials</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>
        <Box sx={{ mt: 4, backgroundColor: "white",p:2,borderRadius:2 }}>
          <Typography>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </Typography>
          <hr />
          <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Image src={Person} alt="personImage" width={50} height={50} />
            <CustomButton title={"read more"} backgroundColor={"#f8f5f5"} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "300px" }}>left </Box>
    </Box>
  );
};

export default index;
