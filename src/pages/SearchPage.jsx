import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProducts } from "../store/slices/productSlice";
import { useLocation } from "react-router-dom";
import DisplayProduct from "../components/DisplayProduct";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  const fetchProducts = async (query) => {
    dispatch(setLoading(true));
    const url = `https://dummyjson.com/products/search?q=${query}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setProducts(json.products));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (searchQuery) {
      fetchProducts(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <h1 className="text-3xl mb-3">Search Result for "{searchQuery}"</h1>
      {loading && <div>Loading results...</div>}
      {products.length > 0 ? (
        <div className="grid grid-cols-5">
          {" "}
          {products.map((product) => (
            <div key={product.id} className="flex flex-wrap items-center">
              <DisplayProduct product={product} />
            </div>
          ))}{" "}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchPage;
