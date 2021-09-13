import Header from "../Components/Header";
import Container from "../Components/Container";
import { AppProvider } from "../Context/UserContext";
import { CoinProvider } from "../Context/CoinContext";
import { ProductProvider } from "../Context/ProductContext";

function Home() {
  return (
    <div className="App">
     
        <CoinProvider>
          <AppProvider>
            <Header />
          </AppProvider>
        </CoinProvider>
        <ProductProvider>
          <Container />
        </ProductProvider>
    </div>
  );
}

export default Home;