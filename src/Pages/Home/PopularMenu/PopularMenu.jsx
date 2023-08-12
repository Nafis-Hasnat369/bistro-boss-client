import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                heading="---Check it out---"
                subHeading="from our menu" />
            <div className="grid md:grid-cols-2 gap-4">
                {popularItems.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
            
        </section>
    );
};

export default PopularMenu;