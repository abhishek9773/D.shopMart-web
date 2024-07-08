import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import ProductArea from "./components/Product/ProductArea";
import ProductList from "./data/ProductList";
import ProductList2 from "./data/ProductList2";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        {/* <ProductCollection /> */}
        <Hero />
        <Category />
        <ProductArea ProductList={ProductList} />
        <ProductArea ProductList={ProductList2} />
      </div>
    </div>
  );
}

export default App;
