import { createContext, useState, useEffect } from "react"

export const ShoppingCardContext = createContext()

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCardProvider = ({ children }) => {

    const [account, setAccount] = useState({})
    const [signOut, setSignOut] = useState(false)

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

    // * Get products by Category
    const [searchByCategory, setSearchByCategory] = useState(null);
    console.log(searchByCategory)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        } 

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        } 
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }
    
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

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
            filteredItems,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}