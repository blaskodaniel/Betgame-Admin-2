import { ArrowDownOutlined, ArrowUpOutlined, DownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Row, Space, Typography } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import MatchListItem from '../components/Matches/MatchListItem';
import { GetAllMatches } from '../services/api-functions';
import { MatchesAtom } from '../statemanager/atoms';

const { Title } = Typography;

const MatchListPage = () => {
  const [matches, setmatches] = useRecoilState(MatchesAtom);
  const [latestmatches, setlatestmatches] = useState([]);
  const [sortState, setSortState] = useState('date-up');

  const Sorter = (type) => {
    const copyMatches = JSON.parse(JSON.stringify(matches));
    if (type === 'date-up') {
      copyMatches.sort((x, y) => new Date(x.date) - new Date(y.date));
      setSortState('date-up');
    }
    if (type === 'date-down') {
      copyMatches.sort((x, y) => new Date(y.date) - new Date(x.date));
      setSortState('date-down');
    }
    if (type === 'state-up') {
      copyMatches.sort((x, y) => x.active - y.active);
      setSortState('state-up');
    }
    if (type === 'state-down') {
      copyMatches.sort((x, y) => y.active - x.active);
      setSortState('state-down');
    }

    setmatches(copyMatches);
  };

  const handleMenuClick = (e) => {
    Sorter(e.key);
  };

  useEffect(() => {
    const getAllMacthes = async () => {
      try {
        const resp = await GetAllMatches();
        setmatches(resp.data.sort((x, y) => new Date(x.date) - new Date(y.date)));
        setlatestmatches(resp.data.filter((x) => moment(x.date).isSame(new Date(), 'day')));
      } catch (e) {
        console.log('Error');
      }
    };
    getAllMacthes();
  }, [setmatches]);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="date-down" className={sortState === 'date-down' && 'selected-sort'} icon={<ArrowDownOutlined />}>
        Dátum szerint csökkenő
      </Menu.Item>
      <Menu.Item key="date-up" className={sortState === 'date-up' && 'selected-sort'} icon={<ArrowUpOutlined />}>
        Dátum szerint növekvő
      </Menu.Item>
      <Menu.Item
        key="state-down"
        className={sortState === 'state-down' && 'selected-sort'}
        icon={<ArrowDownOutlined />}
      >
        Státusz szerint csökkenő
      </Menu.Item>
      <Menu.Item key="state-up" className={sortState === 'state-up' && 'selected-sort'} icon={<ArrowUpOutlined />}>
        Státusz szerint növekvő
      </Menu.Item>
    </Menu>
  );

  return (
    <Row className="mf-matches">
      <div className="latest-matches">
        <Title level={4} className="mf-title">
          A mai nap mérkőzései
        </Title>
        {latestmatches.map((match) => {
          return <MatchListItem key={match._id} match={match} isCalendarDate />;
        })}
        {latestmatches.length === 0 && (
          <div className="empty-latest-matches">
            <InfoCircleOutlined />
            <p>A mai nap nincsenek mérkőzések</p>
          </div>
        )}
      </div>
      <div className="header-panel">
        <div className="title">
          <Title level={4} className="mf-title">
            A bajnokság összess mérkőzése
          </Title>
        </div>
        <div className="sorter">
          <Space>
            <Dropdown className="sorter-dropdown" overlay={menu} trigger={['click']}>
              <Button className="sortbtn" size="small">
                Rendezés <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </div>
      </div>
      {matches.map((match) => {
        return <MatchListItem key={match._id} match={match} />;
      })}
    </Row>
  );
};

export default MatchListPage;
