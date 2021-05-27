import { EyeInvisibleOutlined, GlobalOutlined, LockOutlined, SyncOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const MatchBoxHeader = ({ match }) => {
  return (
    <header>
      <div className="teams">
        <span className="teamname">{match.teamA.name}</span>
        <Avatar size={15} alt={`${match.teamA.name}-flag`} src={`/flags/${match.teamA.flag}`} className="flag" />
        {match.goalA ?? <span className="score">{match.goalA}</span>}
        <span>-</span>
        {match.goalB ?? <span className="score">{match.goalB}</span>}
        <Avatar size={15} alt={`${match.teamB.name}-flag`} src={`/flags/${match.teamB.flag}`} className="flag" />
        <span className="teamname">{match.teamB.name}</span>
      </div>
      <div className="status">
        {match.active === -1 && <EyeInvisibleOutlined />}
        {match.active === 0 && <GlobalOutlined />}
        {match.active === 1 && <SyncOutlined spin />}
        {match.active === 2 && <LockOutlined />}
      </div>
    </header>
  );
};

export default MatchBoxHeader;
