import { ExclamationCircleOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import moment from 'moment';

const LogDesktopView = ({ type, msg, ip, date }) => {
  return (
    <section className={`log-desktop-view ${type.toLowerCase() || ''}`}>
      <div className="log-icon">
        {type.toLowerCase() === 'info' && <InfoCircleOutlined />}
        {type.toLowerCase() === 'error' && <ExclamationCircleOutlined />}
        {type.toLowerCase() === 'warning' && <WarningOutlined />}
      </div>
      <div className="log-message">{msg}</div>
      <div className="log-ip">{ip}</div>
      <div className="log-date">{moment(date).format('YYYY-MM-DD HH:mm')}</div>
    </section>
  );
};

export default LogDesktopView;
