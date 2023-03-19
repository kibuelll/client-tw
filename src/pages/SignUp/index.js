import { Typography, Form, Button, Select ,Input} from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import "./index.css";

const { Option } = Select;
const { Item } = Form;
const { Title } = Typography;
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onFinish = (values) => {
    dispatch(registerUser(values))
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="register-container">
      <Title level={1} className="register-title">
        SIGN-UP
      </Title>
      <Form onFinish={onFinish} className="register-section">
        <Item name="email" style={{ padding: 0, margin: "0.5em" }}>
          <Input
            type="email"
            placeholder="Your email"
            className="input-control"
          />
        </Item>
        <Item name="name" style={{ padding: 0, margin: "0.5em" }}>
          <Input
            type="text"
            placeholder="Your name"
            className="input-control"
          />
        </Item>
        <Item name="gender" style={{ padding: 0, margin: "0.5em" }}>
          <Select placeholder="Your gender">
            <Option value="Male" className="select-control">Male</Option>
            <Option value="Female" className="select-control">Female</Option>
          </Select>
        </Item>
        <Item name="password" style={{ padding: 0, margin: "0.5em" }}>
          <Input
            type="password"
            placeholder="Input password"
            className="input-control"
          />
        </Item>
        <Item className="btn-div">
          <Button htmlType="submit" className="btn-register">
            REGISTER
          </Button>
        </Item>
      </Form>
    </section>
  );
};

export default SignUp;
