import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCardProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />},
    { path: "/my-account", element: <MyAccount />},
    { path: "/my-order", element: <MyOrder />},
    { path: "/my-orders", element: <MyOrders />},
    { path: "/*", element: <NotFound />},
    { path: "/sing-in", element: <SignIn />},
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App
