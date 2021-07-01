import { Result } from 'antd';

const WarningPanel = ({ text, status }) => {
  return (
    <Result status={status || 'warning'} title={<h4 className="warning-panel">{text}</h4> || 'Valami hiba történt!'} />
  );
};

export default WarningPanel;
