import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({items, title, paragraph, coverImg}) => {
    return (
        <>
        {title && <Cover img={coverImg} title={title} paragraph={paragraph}></Cover>}
        <div className="grid lg:grid-cols-2 gap-4 w-10/12 mx-auto">
        {items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
        </div>
        <Link to={`/shop/${title}`}>
        <div className="flex justify-center">
        <button className="btn text-white btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
        </Link>
        </>
    );
};

export default MenuCategory;