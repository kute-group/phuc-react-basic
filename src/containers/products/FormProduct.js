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
  MoneyCollectOutlined 
} from "@ant-design/icons";

const { Option } = Select;
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function FormProduct() {
  return (
    <WrapperApp>
      <Row>
        <Col span={21}>
          <h2 class="page-title">Thêm mới sản phẩm</h2>
        </Col>
        <Col span={3}>
          <Link to="/products">
            <Button type="primary" icon={<UnorderedListOutlined />}>
              Danh sách sản phẩm
            </Button>
          </Link>
        </Col>
      </Row>
      <div className="content-add">
        <Row>
          <Col span={17}>
            <label>
              Tiêu đề: <Input placeholder="Tiêu đề" />
            </label>
            <label>
              Mô tả: <Input placeholder="Mô tả" />
            </label>
            <label>
              Nội dung: <Input placeholder="Nội dung" />
            </label>
          </Col>
          <Col span={1}></Col>
          <Col span={6}>
            <div class="border-box">
              <h2>Giá sản phẩm</h2>
              <div className="sidebar">
                <label>Giá bán <Input placeholder="0" prefix={<MoneyCollectOutlined /> } /></label>
                <label>Giá khuyến mại <Input placeholder="0" prefix={<MoneyCollectOutlined /> } /></label>
              </div>
            </div>
            <div class="border-box">
              <h2>Danh mục</h2>
              <Select placeholder="Danh mục cha">
                <Option value="cap1">Kiến thức tiểu học</Option>
                <Option value="cap2">Kiến thức trung học cơ sở</Option>
                <Option value="cap2">Kiến thức trung học phổ thông</Option>
              </Select>
            </div>
            <div class="border-box">
              <h2>Ảnh đại diện</h2>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
          </Col>
        </Row>
      </div>
    </WrapperApp>
  );
}

export default FormProduct;
