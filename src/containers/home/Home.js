import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="content-home"></div>
    </div>
  );
}

export default Home;
