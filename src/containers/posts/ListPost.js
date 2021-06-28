import WrapperApp from "../../components/WrapperApp";
import { Link } from "react-router-dom";

import { Table, Radio, Divider, Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
    image: "https://web5days.com/static/media/logo.d1bb6a27.png",
    title: "10 cách dạy toán cho trẻ mẫu giáo học mà như chơi",
    author: "Phúc Vũ",
    category: "Tin tức",
    date: "27-06-2021",
    status: "Đang hoạt động",
  },
  {
    image: "https://web5days.com/static/media/logo.d1bb6a27.png",
    title: "10 cách dạy toán cho trẻ mẫu giáo học mà như chơi",
    author: "Phúc Vũ",
    category: "Tin tức",
    date: "27-06-2021",
    status: "Đang hoạt động",
  },
];

function ListPost() {
  return (
    <WrapperApp>
      <Row>
        <Col span={21}>
          <h2 class="page-title">Bài viết</h2>
          <Link to="/post/categories">
            <Button type="primary" icon={<PlusOutlined />}>
              Danh mục
            </Button>
          </Link>
        </Col>
        <Col span={3}>
          <Link to="/post/add">
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm mới bài viết
            </Button>
          </Link>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </WrapperApp>
  );
}

export default ListPost;
