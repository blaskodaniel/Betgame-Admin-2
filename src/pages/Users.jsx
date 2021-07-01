import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useRecoilValueLoadable } from 'recoil';
import { getUsersSelector } from '../statemanager/selectors';
import Loader from '../components/Loader';
import UserBox from '../components/Users/UserBox';

const UsersPage = () => {
  const usersLoadable = useRecoilValueLoadable(getUsersSelector);

  if (usersLoadable.state === 'loading') {
    return <Loader title="Játékosok betöltése..." />;
  }

  if (usersLoadable.state === 'hasError') {
    throw usersLoadable.contents;
  }

  return (
    <section className="users-page">
      <div className="page-header">
        <Button className="mf-button-style" type="primary" shape="round" icon={<PlusCircleOutlined />}>
          Új játékos
        </Button>
      </div>
      <div>
        {usersLoadable.contents.map((userGroup) => {
          return (
            <div className="user-group-section" key={userGroup._id}>
              <h2>{userGroup.displayName}</h2>
              <div className="list">
                {userGroup.users.map((user) => {
                  return <UserBox key={user._id} user={user} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UsersPage;
