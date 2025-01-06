import FoodCard from "./FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto">
        {
            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;