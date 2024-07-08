import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        {/* <ProductCollection /> */}
        <Hero />
        <Category />
      </div>
    </div>
  );
}

export default App;
