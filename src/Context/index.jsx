import { createContext, useState, useEffect } from "react"

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    // Product Detail 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu Open/Close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

    // Product Detail, Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Card, Add products to card
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);

    // * Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setItems(data));
      }, []);

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}