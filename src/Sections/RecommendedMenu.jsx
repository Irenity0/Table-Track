import FoodCard from "../components/FoodCard";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";

const RecommendedMenu = () => {
    const [menu] = useMenu();
    console.log(menu);

    return (
        <>
            <SectionTitle title={'Chef Recommends'} subTitle={'Should Try'}></SectionTitle>
            <br />
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {menu.slice(0, 4).map(item => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
        </>
    );
};

export default RecommendedMenu;
