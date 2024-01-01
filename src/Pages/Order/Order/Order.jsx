import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Orders</title></Helmet>
            <Cover img={orderCover} title="Order Food" description="Confirm your food here" />
        </div>
    );
};

export default Order;