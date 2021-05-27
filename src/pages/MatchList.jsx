import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  FormOutlined,
  GlobalOutlined,
  LockOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Avatar, Row, Tag, Typography } from 'antd';
import { useRecoilValueLoadable } from 'recoil';
import Loader from '../components/Loader';
import { getMatchesSct } from '../statemanager/selectors';

const { Title } = Typography;

const MatchListPage = () => {
  const matches = useRecoilValueLoadable(getMatchesSct);
  if (matches.state === 'loading') {
    return <Loader title="Mérkőzések betöltése ..." />;
  }
  if (matches.state === 'hasError') {
    return <p>Valami baj van</p>;
  }
  return (
    <Row className="mf-matches">
      <Title level={4} className="mf-title">
        A bajnokság mérkőzései
      </Title>
      {matches?.contents.map((match) => {
        return (
          <div key={match._id} className="listitem">
            <div className="teams">
              <span className="teamname">{match.teamA.name}</span>
              <Avatar size={20} alt={`${match.teamA.name}-flag`} src={`/flags/${match.teamA.flag}`} className="flag" />
              {match.goalA ?? <span className="score">{match.goalA}</span>}
              <span>-</span>
              {match.goalB ?? <span className="score">{match.goalB}</span>}
              <Avatar size={20} alt={`${match.teamB.name}-flag`} src={`/flags/${match.teamB.flag}`} className="flag" />
              <span className="teamname">{match.teamB.name}</span>
            </div>
            <div className="odds">
              <span>{match.oddsAwin}</span>
              <span>{match.oddsDraw}</span>
              <span>{match.oddsBwin}</span>
            </div>
            <div className="status">
              {match.active === -1 && (
                <Tag icon={<EyeInvisibleOutlined />} color="default">
                  Offline
                </Tag>
              )}
              {match.active === 0 && (
                <Tag icon={<GlobalOutlined />} color="#2e444e">
                  Online
                </Tag>
              )}
              {match.active === 1 && (
                <Tag icon={<SyncOutlined spin />} color="#a22525">
                  Live
                </Tag>
              )}
              {match.active === 2 && (
                <Tag icon={<LockOutlined />} color="#1e5a5a">
                  Close
                </Tag>
              )}
            </div>
            <div className="actions">
              <FormOutlined />
              <DeleteOutlined />
            </div>
          </div>
        );
      })}
    </Row>
  );
};

export default MatchListPage;
