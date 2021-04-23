import { Menu } from 'antd';
import { FileSearchOutlined, SettingOutlined, SkinOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu theme="dark" mode="horizontal">
      <SubMenu key="GameSubMenu" icon={<SettingOutlined />} title="Játék">
        <Menu.Item key="setting:1">
          <TeamOutlined />
          <span>Csoportok</span>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <SkinOutlined />
          <span>Csapatok</span>
        </Menu.Item>
        <Menu.Item key="setting:3">
          <TeamOutlined />
          <span>Mérkőzések</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="SystemSubMenu" icon={<SettingOutlined />} title="Rendszer">
        <Menu.Item key="setting:4">
          <UserOutlined />
          <span>Felhasználók</span>
        </Menu.Item>
        <Menu.Item key="setting:5">
          <FileSearchOutlined />
          <span>Logok</span>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navigation;
