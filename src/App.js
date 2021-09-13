import Header from "./Components/Header";
import Container from "./Components/Container";
import { AppProvider } from "./Context/UserContext";
import { CoinProvider } from "./Context/CoinContext";
function App() {
  return (
    <div className="App">
      <CoinProvider>
        <AppProvider>
          <Header />
        </AppProvider>
      </CoinProvider>
      <Container />
      
    </div>
  );
}

export default App;
