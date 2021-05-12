import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { createElement } from 'react/cjs/react.development';
import BGBreadcrumb from '../components/Layout/BreadCrumb';
import Navigation from '../components/Layout/Navigation';

const { Header, Content, Footer, Sider } = Layout;

const LayoutPage = () => {
  const [collapse, setcollapse] = useState();

  const toggle = () => {
    setcollapse(!collapse);
  };

  return (
    <Layout className="bet-game-layout">
      <Sider trigger={null} collapsible collapsed={collapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header className="header">
          <Navigation />
        </Header> */}
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapse ? MenuFoldOutlined : MenuUnfoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content className="content">
          <BGBreadcrumb />
          <div className="content-wrapper">Content</div>
        </Content>
        <Footer className="footer">Bet Game ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
