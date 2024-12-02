import "./App.css";
import Banner from "./components/Home/Banner";
import CategoryButtonGroup from "./components/Home/CategoryButtonGroup";
import ConnectWalletState from "./components/Home/ConnectWalletState";
import AllCategory from "./components/Home/AllCategory";
import Review from "./components/Home/Review";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import SellectWallet from "./components/Shared/SellectWallet";
// import TrendingNowPage from "./components/TrendingNowPage/TrendingNow";

function App() {
  return (
    <>
      <Header></Header>
      <CategoryButtonGroup></CategoryButtonGroup>
      <Banner></Banner>
      <Review></Review>
      <ConnectWalletState></ConnectWalletState>
      <AllCategory></AllCategory>
      {/* <SellectWallet></SellectWallet> */}
      {/* <TrendingNowPage></TrendingNowPage> */}
      <Footer></Footer>
    </>
  );
}

export default App;
