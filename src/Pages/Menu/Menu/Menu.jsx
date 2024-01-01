import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertBG from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBG from '../../../assets/menu/pizza-bg.jpg';
import soupBG from '../../../assets/menu/soup-bg.jpg';
import saladBG from '../../../assets/menu/salad-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={menuImg} title="our menu" description="Welcome to the menu" />
            <SectionTitle heading="---Don't miss---" subHeading="todays offer" />
            <MenuCategory items={offered} />
            <MenuCategory items={dessert} title="Desserts" img={dessertBG} />
            <MenuCategory items={pizza} title="Pizzas" img={pizzaBG} />
            <MenuCategory items={soup} title="Soups" img={soupBG} />
            <MenuCategory items={salad} title="Salads" img={saladBG} />

        </div>
    );
};

export default Menu;