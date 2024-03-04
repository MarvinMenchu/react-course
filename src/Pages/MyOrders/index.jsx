import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { Link } from "react-router-dom"; 

function MyOrders() {

    const context = useContext(ShoppingCardContext);

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 ">
            
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => {
                    <Link key={index} to={`/my-order/${order.id}`}>
                    <OrdersCard
                        key={order.date}
                        totalPrice={order.totalPrice}
                        totalProduts={order.totalProduts} 
                    />
                    </Link>
                })
            }
            <OrdersCard />
        </Layout>
    )
}

export default MyOrders;