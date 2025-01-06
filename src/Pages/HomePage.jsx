import { Helmet } from "react-helmet";
import CallUs from "../Sections/CallUs";
import Featured from "../Sections/FeaturedSection";
import HomeBanner from "../Sections/HomeBanner";
import HomeCover from "../Sections/HomeCover";
import HomeSwiper from "../Sections/HomeSwiper";
import PopularMenu from "../Sections/PopularMenu";
import RecommendedMenu from "../Sections/RecommendedMenu";
import Testimonials from "../Sections/TestimonialSection";

const HomePage = () => {
    return (
        <>
        <Helmet> 
            <title>Table Track | Home </title>
        </Helmet>
        <HomeBanner/>
        <HomeSwiper/>
        <HomeCover/>
        <PopularMenu/>
        <CallUs/>
        <RecommendedMenu/>
        <Featured/>
        <Testimonials/>
        </>
    );
};

export default HomePage;