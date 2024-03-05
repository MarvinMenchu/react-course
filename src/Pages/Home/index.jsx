import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCardContext } from "../../Context";

function Home() {
  const { items, searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCardContext);


  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0 ){
        return(
          filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
    } else {
      return (
        items?.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium  text-xl">Exclusive Products</h1>
      </div>
      <input 
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" 
        type="text" placeholder="Search a product" 
        onChange={(event) => setSearchByTitle(event.target.value)}
        />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
