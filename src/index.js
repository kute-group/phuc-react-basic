import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./containers/home/Home";

import ListPost from "./containers/posts/ListPost";
import ListPostCategories from "./containers/posts/ListPostCategories";
import FormPost from "./containers/posts/FormPost";

import ListProduct from "./containers/products/ListProduct";
import ListProductCategories from "./containers/products/ListProductCategories";
import FormProduct from "./containers/products/FormProduct";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <ListPost />
          </Route>
          <Route path="/post/categories">
            <ListPostCategories />
          </Route>
          <Route path="/post/add">
            <FormPost />
          </Route>
          <Route path="/post/edit/:id">
            <FormPost />
          </Route>
          <Route path="/products">
            <ListProduct />
          </Route>
          <Route path="/product/categories">
            <ListProductCategories />
          </Route>
          <Route path="/product/add">
            <FormProduct />
          </Route>
          <Route path="/product/edit/:id">
            <FormProduct />
          </Route>
          <Route path="*">Không tồn tại</Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
