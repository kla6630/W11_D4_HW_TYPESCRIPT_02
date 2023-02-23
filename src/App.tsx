import {} from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import FetchArticles from "./components/FetchArticles";

import "./App.css";

function App() {
  return (
    <>
      <MyNav />
      <FetchArticles />
      <MyFooter />
    </>
  );
}

export default App;
