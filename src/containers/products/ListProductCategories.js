import WrapperApp from "../../components/WrapperApp";
import { Link } from "react-router-dom";

import {
  Table,
  Radio,
  Divider,
  Row,
  Col,
  Button,
  Input,
  Select,
  Upload,
  message,
} from "antd";
import {
  UnorderedListOutlined,
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const columns = [
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
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
    title: "10 cách dạy toán cho trẻ mẫu giáo học mà như chơi",
    description: "",
    date: "27-06-2021",
    status: "Đang hoạt động",
  },
  {
    title: "10 cách dạy toán cho trẻ mẫu giáo học mà như chơi",
    description: "",
    date: "27-06-2021",
    status: "Đang hoạt động",
  },
];

function ListProductCategories() {
  return (
    <WrapperApp>
      <Row>
        <Col span={6}>
          <div className="left-sidebar">
            <h2>Thêm mới danh mục</h2>
            <div className="input-category">
              <label>
                Tiêu đề: <Input placeholder="Tiêu đề" />
              </label>
              <label>
                Mô tả: <Input placeholder="Mô tả" />
              </label>
              <label>
                Nội dung: <Input placeholder="Nội dung" />
              </label>
            </div>
            <div className="choose-category">
              <p>Danh mục cha</p>
              <Select placeholder="Danh mục cha">
                <Option value="cap1">Kiến thức tiểu học</Option>
                <Option value="cap2">Kiến thức trung học cơ sở</Option>
                <Option value="cap2">Kiến thức trung học phổ thông</Option>
              </Select>
            </div>
            <div className="status-category">
              <p>Trạng thái</p>
              <Select placeholder="Đang hoạt động">
                <Option value="cap1">Đang hoạt động</Option>
                <Option value="cap2">Bản nháp</Option>
                <Option value="cap2">Chờ xét duyệt</Option>
              </Select>
            </div>
            <div className="button-add">
              <Button type="primary" shape="round">
                Thêm mới
              </Button>
            </div>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={17}>
          <h2 class="page-title">DANH MỤC SẢN PHẨM</h2>
          <div className="content-categories">
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
      </Row>
    </WrapperApp>
  );
}

export default ListProductCategories;
