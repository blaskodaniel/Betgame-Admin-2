import { PlusCircleOutlined } from '@ant-design/icons';
import { useRecoilValueLoadable } from 'recoil';
import { Button, Col, Row } from 'antd';
import Loader from '../components/Loader';
import WarningPanel from '../components/WarningPanel';
import { getChampionshipsSelector } from '../statemanager/selectors';
import Championship from '../components/Championships/Championship';

const ChampionshipsPage = () => {
  const champsLoadable = useRecoilValueLoadable(getChampionshipsSelector);

  if (champsLoadable.state === 'loading') {
    return <Loader title="Bajnokságok betöltése..." />;
  }

  if (champsLoadable.state === 'hasError') {
    return <WarningPanel text={`${champsLoadable.contents}`} />;
  }

  return (
    <div className="champions-page">
      <div className="page-header">
        <Button className="mf-button-style" type="primary" shape="round" icon={<PlusCircleOutlined />}>
          Új bajnokság
        </Button>
      </div>
      <div className="list">
        {champsLoadable.contents.map((ch) => (
          <Championship key={ch._id} championship={ch} />
        ))}
      </div>
    </div>
  );
};

export default ChampionshipsPage;
