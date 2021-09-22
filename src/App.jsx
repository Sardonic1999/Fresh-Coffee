import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Menu from "./Menu/Menu";
import Products from "./Products/Products";
import Review from "./Review/Review";
import Contact from "./Contact/Contact";
import Blog from "./Blogs/Blog";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
