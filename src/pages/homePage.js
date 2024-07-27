import CoursesHome from "@/components/courses/homePage/CoursesHome";
import Banner from "@/components/homepage/Banner";
import BenefitsSection from "@/components/homepage/BenefitsSection";
import Testimonials from "@/components/homepage/Testimonials";
import VideoBanner from "@/components/homepage/VideoBanner";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Banner />
      {/* <VideoBanner
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        posterSrc="https://www.w3schools.com/html/img_girl.jpg"
      /> */}
      <Box sx={{ mt: 10, mb: 5 }}>
        <BenefitsSection />
      </Box>
      <Box sx={{ mt: 15, mb: 5 }}>
        <CoursesHome />
      </Box>
      <Box sx={{ mt: 15, mb: 5 }}>
        <Testimonials />
      </Box>
    </Box>
  );
};

export default HomePage;
