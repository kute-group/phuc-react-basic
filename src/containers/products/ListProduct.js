import WrapperApp from "../../components/WrapperApp";

import { Table, Radio, Divider, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';

const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Tác giả",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Ngày tạo",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "trạng thái",
    dataIndex: "status",
    key: "status",
  },
];

const data = [
  {
    image: "https://web5days.com/uploads/2021/3/1616043785574.jpg",
    title: "Sản phẩm 01",
    author: "Phúc Vũ",
    category: "Tin tức",
    date: "27-06-2021",
    status: "Đang hoạt động",
  },
  {
    image: "https://web5days.com/uploads/2021/3/1616043785574.jpg",
    title: "Sản phẩm 02",
    author: "Phúc Vũ",
    category: "Tin tức",
    date: "27-06-2021",
    status: "Đang hoạt động",
  },
];

function ListProduct() {
  return (
    <WrapperApp>
      <Row>
        <Col span={21}>
          <h2 class="page-title">Sản phẩm </h2>
          <Link to="/product/categories">
            <Button type="primary" icon={<PlusOutlined />}>
              Danh mục
            </Button>
          </Link>
        </Col>
        <Col span={3}>
          <Link to="/product/add">
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm mới sản phẩm
            </Button>
          </Link>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </WrapperApp>
  );
}

export default ListProduct;
