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
    const [filteredItems, setFilteredItems] = useState(null);

    // * Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setItems(data));
      }, []);

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) {
          setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }
      }, [items, searchByTitle]);

      console.log(filteredItems);

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
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}