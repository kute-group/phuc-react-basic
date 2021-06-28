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

function FormPost() {
  return (
    <WrapperApp>
      <Row>
        <Col span={21}>
          <h2 class="page-title">Thêm Mới Bài Viết</h2>
        </Col>
        <Col span={3}>
          <Link to="/posts">
            <Button type="primary" icon={<UnorderedListOutlined />}>
              Danh sách bài viết
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

export default FormPost;
