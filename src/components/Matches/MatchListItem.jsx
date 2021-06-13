import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  FormOutlined,
  GlobalOutlined,
  LockOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Avatar, Tag } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MatchListItem = ({ match, isCalendarDate }) => {
  const matchElementBg = (status) => {
    switch (status) {
      case -1:
        return 'offline';
      case 0:
        return 'online';
      case 1:
        return 'playing';
      case 2:
        return 'close';
      default:
        return 'offline';
    }
  };
  return (
    <div className={`listitem ${matchElementBg(match.active)}`}>
      <div className="teams">
        <div>
          <span className="teamname">{match.teamA.name}</span>
          <Avatar size={20} alt={`${match.teamA.name}-flag`} src={`/flags/${match.teamA.flag}`} className="flag" />
          {match.goalA ?? <span className="score">{match.goalA}</span>}
          <span>-</span>
          {match.goalB ?? <span className="score">{match.goalB}</span>}
          <Avatar size={20} alt={`${match.teamB.name}-flag`} src={`/flags/${match.teamB.flag}`} className="flag" />
          <span className="teamname">{match.teamB.name}</span>
        </div>
        <div>
          {isCalendarDate
            ? moment(match.date).calendar(null, {
                sameDay: '[Ma] HH:mm',
                nextDay: '[Holnap] DD. HH:mm',
                nextWeek: 'MMMM.DD HH:mm',
                lastDay: '[Tegnap] DD. HH:mm',
                lastWeek: 'MMMM.DD HH:mm',
                sameElse: 'MMMM.DD HH:mm',
              })
            : moment(match.date).format('MMMM.DD HH:mm')}
        </div>
      </div>
      <div className="odds">
        <span>{match.oddsAwin?.toFixed(2) || '-'}</span>
        <span>{match.oddsDraw?.toFixed(2) || '-'}</span>
        <span>{match.oddsBwin?.toFixed(2) || '-'}</span>
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
            Élőben
          </Tag>
        )}
        {match.active === 2 && (
          <Tag icon={<LockOutlined />} color="#1e5a5a">
            Vége
          </Tag>
        )}
      </div>
      <div className="actions">
        <Link to={`/match/${match._id}`}>
          <FormOutlined />
        </Link>
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default MatchListItem;
