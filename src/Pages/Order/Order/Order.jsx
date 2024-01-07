import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../Ordertab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ["salad", "pizza", "dessert", "soup", "drinks"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drink = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet><title>Bistro Boss | Orders</title></Helmet>
            <Cover img={orderCover} title="Order Food" description="Confirm your food here" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drink} />
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order; 