import { useState, useEffect } from "react";
import "./App.css";
import ProductsList from "./components/Products";
import Button from "./components/Button";
import axios from "axios";
const api = "https://dummyjson.com/products";
function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${api}?limit=${limit}`);
      const data = await response.data.products;
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [limit]);

  const handleButtonClicked = () => {
    setLimit((prev) => prev + 5);
    setIsLoading(true);
  };

  return (
    <>
      <ProductsList products={products} isLoading={isLoading} />
      <Button onClick={handleButtonClicked} disabled={isLoading} />
    </>
  );
}

export default App;
