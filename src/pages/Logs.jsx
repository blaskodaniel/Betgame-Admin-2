import { Pagination, Radio } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import Loader from '../components/Loader';
import LogDesktopView from '../components/Logs/DesktopView';
import LogMobileView from '../components/Logs/MobileView';
import WarningPanel from '../components/WarningPanel';
import { LogsCurrentPageValue } from '../statemanager/atoms';
import { getLogsSelector } from '../statemanager/selectors';
import { antdBreakpoints } from '../utils/constants/breakpoints';

const LogsPage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${antdBreakpoints.md})` });
  const logLoadable = useRecoilValueLoadable(getLogsSelector);
  const [currPageVal, setcurrPageVal] = useRecoilState(LogsCurrentPageValue);

  const pager = (pagenumber, pagesize) => {
    setcurrPageVal({ ...currPageVal, pagenumber, pagesize });
  };

  if (logLoadable.state === 'loading') {
    return <Loader title="Logok betöltése..." />;
  }

  if (logLoadable.state === 'hasError') {
    return <WarningPanel text={`${logLoadable.contents}`} />;
  }

  return (
    <section className="log-page">
      <div className="log-header">
        <h1>Eseménynapló</h1>
        <div className="log-filters">
          <Radio.Group>
            <Radio.Button value="large">Info</Radio.Button>
            <Radio.Button value="default">Error</Radio.Button>
            <Radio.Button value="small">Warning</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className="log-main">
        {logLoadable.contents.logs.map((log) => {
          if (!isMobile) {
            return <LogDesktopView key={log._id} type={log.type} msg={log.msg} ip={log.ip} date={log.date} />;
          }
          return <LogMobileView key={log._id} id={log._id} type={log.type} msg={log.msg} ip={log.ip} date={log.date} />;
        })}
      </div>
      <div className="log-pagination">
        <Pagination
          showSizeChanger
          defaultCurrent={currPageVal.pagenumber}
          onChange={pager}
          total={logLoadable.contents.logcount}
          pageSize={currPageVal.pagesize}
        />
      </div>
    </section>
  );
};

export default LogsPage;
