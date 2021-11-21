import { useState } from "react";
import "./App.css";
import AllCards from "./components/AllCards";
import Search from "./components/search";

function App() {
  // states
  const [visible, setVisible] = useState(12);

  // functions
  const loadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="App">
      <Search />
      <AllCards visible={visible} />
      <button className="btn" onClick={loadMore}>
        <i class="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default App;
// https://api.jikan.moe/v3/search/anime?q=naruto&limit=16
