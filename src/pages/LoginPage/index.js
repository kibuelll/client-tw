import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Form, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userAction";
import "./index.css";
import Input from "antd/es/input/Input";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Item } = Form;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log(values, "_+_+_+_+");
    dispatch(loginUser(values))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="login-container">
      <Title level={1} className="login-title">
        LOGIN
      </Title>
      <Form onFinish={onFinish} className="login-section">
        <img
          src="https://thecorporateofficial.com/wp-content/uploads/2021/02/unlocked-padlock-B5854A.png"
          height={80}
          width={80}
        />
        <Item name="email" style={{ padding: 0, margin: "0.5em" }}>
          <Input
            type="email"
            placeholder="Input email"
            className="input-control"
          />
        </Item>
        <Item name="password" style={{ padding: 0, margin: "0.5em" }}>
          <Input
            type="password"
            placeholder="Input password"
            className="input-control"
          />
        </Item>
        <Item className="btn-div">
          <Button htmlType="submit" className="btn-login">
            LOGIN
          </Button>
          <div style={{flexDirection:'column'}}>
            <p style={{margin:0,textAlign:'center'}}>or</p> 
            <Link to="/register" style={{textDecoration:'none',color:'black'}}>Sign Up here!!</Link>
          </div>
        </Item>
      </Form>
    </section>
  );
};

export default LoginPage;
