import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRecoilValueLoadable } from 'recoil';
import Loader from '../components/Loader';
import TeamBox from '../components/Teams/TeamBox';
import WarningPanel from '../components/WarningPanel';
import { getTeamsSelector } from '../statemanager/selectors';

const TeamsPage = () => {
  const teamsLoadable = useRecoilValueLoadable(getTeamsSelector);

  if (teamsLoadable.state === 'loading') {
    return <Loader title="Csapatok betöltése..." />;
  }

  if (teamsLoadable.state === 'hasError') {
    return <WarningPanel text={`${teamsLoadable.contents}`} />;
  }

  return (
    <div className="teams-page">
      <div className="page-header">
        <Button className="mf-button-style" type="primary" shape="round" icon={<PlusCircleOutlined />}>
          Új csapat
        </Button>
      </div>
      <div className="list">
        {teamsLoadable.contents.map((team) => (
          <TeamBox key={team._id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
