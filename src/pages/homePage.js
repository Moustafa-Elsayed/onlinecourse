import CoursesHome from "@/components/courses/homePage/CoursesHome";
import Banner from "@/components/homepage/Banner";
import BenefitsSection from "@/components/homepage/BenefitsSection";
import VideoBanner from "@/components/homepage/VideoBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
      {/* <VideoBanner
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        posterSrc="https://www.w3schools.com/html/img_girl.jpg"
      /> */}
      <BenefitsSection />
      <CoursesHome />
    </>
  );
};

export default HomePage;
