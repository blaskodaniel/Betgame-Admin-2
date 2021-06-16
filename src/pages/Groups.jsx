import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRecoilValueLoadable } from 'recoil';
import GroupBox from '../components/Groups/GroupBox';
import Loader from '../components/Loader';
import { getGroupSelector, getTeamsSelector } from '../statemanager/selectors';

const GroupsPage = () => {
  const teamsLoadable = useRecoilValueLoadable(getTeamsSelector);
  const groupsLoadable = useRecoilValueLoadable(getGroupSelector);

  if (groupsLoadable.state === 'loading') {
    return <Loader title="Csoportok betöltése..." />;
  }

  if (groupsLoadable.state === 'hasError') {
    throw groupsLoadable.contents;
  }

  return (
    <div className="groups-page">
      <div className="page-header">
        <Button className="mf-button-style" type="primary" shape="round" icon={<PlusCircleOutlined />}>
          Új csoport
        </Button>
      </div>
      <div className="list">
        {groupsLoadable.contents.map((gr) => (
          <GroupBox key={gr._id} group={gr} teamsLoadable={teamsLoadable} />
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
