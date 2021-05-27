import { Col, Menu, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import {
  DashboardOutlined,
  DribbbleOutlined,
  FileSearchOutlined,
  LogoutOutlined,
  PartitionOutlined,
  SettingOutlined,
  SkinOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { antdBreakpoints } from '../../utils/constants/breakpoints';

const { SubMenu } = Menu;

const Navigation = () => {
  const isTablet = useMediaQuery({ query: `(max-width: ${antdBreakpoints.sm})` });
  const isSmallMobile = useMediaQuery({ query: `(max-width: ${antdBreakpoints.xxs})` });
  return (
    <Row className="bet-game-navigation" justify="space-between">
      <Col className="left-side">
        {!isSmallMobile && (
          <div className="logo">
            <Link to="/">
              <img src="/img/mokasfoci-logo.png" alt="mokasfoci-logo" />
            </Link>
          </div>
        )}
        <Menu className="menu" theme="dark" mode="horizontal">
          <SubMenu key="GameSubMenu" icon={<DribbbleOutlined />} title="Játék">
            <Menu.Item key="setting:1">
              <Link to="/groups">
                <TeamOutlined />
                <span>Csoportok</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/teams">
                <SkinOutlined />
                <span>Csapatok</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:3">
              <Link to="/matches">
                <PartitionOutlined />
                <span>Mérkőzések</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="SystemSubMenu" icon={<SettingOutlined />} title="Rendszer">
            <Menu.Item key="setting:4">
              <Link to="/users">
                <UserOutlined />
                <span>Felhasználók</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:5">
              <Link to="/settings">
                <DashboardOutlined />
                <span>Beállítások</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:6">
              <Link to="/logs">
                <FileSearchOutlined />
                <span>Logok</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col>
        <div className="logout">
          <LogoutOutlined />
          {!isTablet && <span style={{ color: 'white' }}>Kilépés</span>}
        </div>
      </Col>
    </Row>
  );
};

export default Navigation;
