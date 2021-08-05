import { ExclamationCircleOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import moment from 'moment';

const { Panel } = Collapse;

const LogHeader = ({ msg, type }) => {
  return (
    <section>
      <div className="log-icon">
        {type.toLowerCase() === 'info' && <InfoCircleOutlined />}
        {type.toLowerCase() === 'error' && <ExclamationCircleOutlined />}
        {type.toLowerCase() === 'warning' && <WarningOutlined />}
      </div>
      <div className="log-message">{msg}</div>
    </section>
  );
};

const LogMobileView = ({ id, type, msg, ip, date }) => {
  return (
    <Collapse className="log-mobile-view">
      <Panel header={<LogHeader msg={msg} type={type} />} key={id}>
        <div className="log-ip">{ip}</div>
        <div className="log-msg">{msg}</div>
        <div className="log-date">{moment(date).format('YYYY-MM-DD HH:mm')}</div>
      </Panel>
    </Collapse>
  );
};

export default LogMobileView;
