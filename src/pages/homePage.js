import CoursesHome from "@/components/courses/homePage/CoursesHome";
import Banner from "@/components/homepage/Banner";
import BenefitsSection from "@/components/homepage/BenefitsSection";
import Testimonials from "@/components/homepage/Testimonials";
import { Box } from "@mui/material";
import Image from "next/image";
import BannerLogo from "../../public/Image/Container.webp";

const HomePage = () => {
  return (
    <Box>
      <Banner />
      <Image
        src={BannerLogo}
        layout="responsive"
        width={16}
        height={9}
        alt="Banner Logo"
      />{" "}
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
