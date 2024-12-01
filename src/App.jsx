import "./App.css";
import Banner from "./components/Home/Banner";
import CategoryButtonGroup from "./components/Home/CategoryButtonGroup";
import ConnectWalletState from "./components/Home/ConnectWalletState";
import MovieCategories from "./components/Home/MovieCategories";
import Review from "./components/Home/Review";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <>
      <Header></Header>
      <CategoryButtonGroup></CategoryButtonGroup>
      <Banner></Banner>
      <Review></Review>
      <ConnectWalletState></ConnectWalletState>
      <MovieCategories></MovieCategories>
      <Footer></Footer>
    </>
  );
}

export default App;
