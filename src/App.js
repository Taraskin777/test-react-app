import "./App.css";

import Comments from "./components/comments/Comments";
import Items from "./components/items/Items";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Comments />
        <Items />
      </div>
    </div>
  );
}

export default App;
