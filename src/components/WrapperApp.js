import "antd/dist/antd.css";
import "../assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function WrapperApp(props) {
  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1"><Link to="/">Trang chủ</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/posts">Bài viết</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/products">Sản phẩm</Link></Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default WrapperApp;
