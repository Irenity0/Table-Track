import CallUs from "../Sections/CallUs";
import HomeBanner from "../Sections/HomeBanner";
import HomeCover from "../Sections/HomeCover";
import HomeSwiper from "../Sections/HomeSwiper";
import PopularMenu from "../Sections/PopularMenu";

const HomePage = () => {
    return (
        <>
        <HomeBanner/>
        <HomeSwiper/>
        <HomeCover/>
        <PopularMenu/>
        <CallUs/>
        </>
    );
};

export default HomePage;