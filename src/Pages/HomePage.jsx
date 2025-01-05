import CallUs from "../Sections/CallUs";
import Featured from "../Sections/FeaturedSection";
import HomeBanner from "../Sections/HomeBanner";
import HomeCover from "../Sections/HomeCover";
import HomeSwiper from "../Sections/HomeSwiper";
import PopularMenu from "../Sections/PopularMenu";
import RecommendedMenu from "../Sections/RecommendedMenu";

const HomePage = () => {
    return (
        <>
        <HomeBanner/>
        <HomeSwiper/>
        <HomeCover/>
        <PopularMenu/>
        <CallUs/>
        <RecommendedMenu/>
        <Featured/>
        </>
    );
};

export default HomePage;