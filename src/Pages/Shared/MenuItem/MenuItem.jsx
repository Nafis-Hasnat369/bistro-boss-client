import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-4 space-y-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-500">${price}</p>
            <Link to="/order">
                <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuItem;