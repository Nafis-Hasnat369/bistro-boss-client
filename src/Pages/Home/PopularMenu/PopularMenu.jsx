import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'popular')))
    }, [])

    return (
        <section>
            <SectionTitle
                heading="---Check it out---"
                subHeading="from our menu" />
            <div className="grid md:grid-cols-2 gap-4">
                {menu.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
        </section>
    );
};

export default PopularMenu;