import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="menu">
      <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Header;
