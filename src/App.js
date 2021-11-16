import Navbar from "./Navbar";
import Home from "./home";
import interests from "./interests";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homepage">
        <Home />
      </div>
      <div className="interest">
        <interests></interests>
      </div>
    </div>
  );
}

export default App;
