import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Orders</title></Helmet>
            <Cover img={orderCover} title="Order Food" />
        </div>
    );
};

export default Order;