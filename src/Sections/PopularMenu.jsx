import MenuItem from "../components/MenuItem";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular') 

    return (
        <div className="w-10/12 mx-auto mt-10">
            <SectionTitle title={"From our menu"} subTitle={"Check It Out"}></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-4">
        {popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
        </div>
        </div>
    );
};

export default PopularMenu;