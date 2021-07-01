import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const UserBox = ({ user }) => {
  return (
    <section className="user-box">
      <div className="user-avatar" style={{ backgroundImage: `url(/avatars/${user.avatar})` }} />
      <div className="user-info">
        <h2>{user.name}</h2>
        <small>{user.email}</small>
        <div className="user-props">
          <div className="prop-wrapper">
            <div className="prop">
              <div>Összpontszám:</div>
              <div>{user.nettoscore}</div>
            </div>
            <div className="prop">
              <div>Felhasználható:</div>
              <div>{user.score}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-button">
        <Tooltip title="Szerkesztés">
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip>
      </div>
    </section>
  );
};

export default UserBox;
