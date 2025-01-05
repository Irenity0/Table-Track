import FoodCard from "../components/FoodCard";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";

const RecommendedMenu = () => {

    const menu = useMenu();
    console.log(menu)

    return (
        <>
        <SectionTitle title={'Chef Reccomends'} subTitle={'Should Try'}></SectionTitle>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        </div>
        </>
    );
};

export default RecommendedMenu;