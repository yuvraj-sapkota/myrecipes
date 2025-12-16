import Navbar from "../components/Navbar";
import Aboutus from "../layouts/home/Aboutus";
import AllRecipes from "../layouts/home/AllRecipes";
import ExploreSection from "../layouts/home/ExploreSection";
import FeaturedSlider from "../layouts/home/FeaturedSlider";

import HeroSection from "../layouts/home/HeroSection";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <HeroSection />
      <ExploreSection />
      <FeaturedSlider />
      <AllRecipes />  
      <Aboutus/>
      <div style={{ height: "204px" }}></div>
    </div>
  );
};

export default Home;
