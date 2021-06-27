import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="content-about"></div>
    </div>
  );
}

export default About;
