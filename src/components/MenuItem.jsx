const MenuItem = ({item}) => {

    const {image, recipe, price, name} = item; 

    return (
        <>
        <div className="flex space-x-4 mb-4">
        <img className="w-[120px] rounded-ee-[50%] rounded-se-[50%] rounded-es-[50%]" src={image} alt="" />
        <div>
        <h3 className="uppercase">{name}------------------</h3>
        <p>{recipe}</p>
        </div>
        <h3 className="text-yellow-600">${price}</h3>
        </div>
        </>
    );  
};

export default MenuItem;