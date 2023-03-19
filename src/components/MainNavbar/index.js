import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Typography } from "antd";
import "./index.css";

const {Text} = Typography

const MainNavbar = () => {
  return (
    <nav>
      <Row className="my-navbar-container">
        <Col span={12} className="nav-left">
          <Link to={"/"}>
            <Button className="btn-navbar">Dashboard</Button>
          </Link>
          <Link to={'/profile'}>
            <Button className="btn-navbar">Profile</Button>
          </Link>
        </Col>
        <Col span={12} className="nav-right">
          <Text>
            {}
          </Text>
          <Link to={"/login"}>
            <Button className="btn-navbar">Login</Button>
          </Link>
        </Col>
      </Row>
    </nav>
  );
};

export default MainNavbar;
