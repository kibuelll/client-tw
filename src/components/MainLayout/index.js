import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import MainNavbar from "../MainNavbar";
const { Header, Footer, Content } = Layout;

const MainLayout = ({ children, ...props }) => {
  return (
    <Layout>
      <Header style={{maxHeight: '2.8rem',padding:"0",backgroundColor:'transparent'}}>
        <MainNavbar/>
      </Header>
      <Content style={{
        minHeight: "100vh"
      }}>
        {!children ? <Outlet /> : children}
      </Content>
      <Footer style={{
        maxHeight: '2rem',
        backgroundColor:"#F1DEC9"
      }}>
        
      </Footer>
    </Layout>
  );
};

export default MainLayout;
