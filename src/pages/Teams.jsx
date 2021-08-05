import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Modal, notification } from 'antd';
import { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import Loader from '../components/Loader';
import TeamBox from '../components/Teams/TeamBox';
import TeamModal from '../components/Teams/TeamModal';
import WarningPanel from '../components/WarningPanel';
import { CreateTeam } from '../services/api-functions';
import { getFlagSelector, getGroupSelector, getTeamsSelector } from '../statemanager/selectors';

const TeamsPage = () => {
  const teamsLoadable = useRecoilValueLoadable(getTeamsSelector);
  const groupsLoadable = useRecoilValueLoadable(getGroupSelector);
  const flagsLoadable = useRecoilValueLoadable(getFlagSelector);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newelement, setnewelement] = useState({
    groupid: '',
    name: '',
    flag: '',
  });

  const handleOk = async () => {
    console.log(newelement);
    try {
      await CreateTeam(newelement);
      notification.success({
        message: 'Sikeres létrehozás',
        description: `${newelement.name} csapatot sikeresen létrehoztad`,
      });
      setIsModalVisible(false);
    } catch (err) {
      notification.error({
        message: 'Hiba a mentés során',
        description: err.message,
      });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onValueChanges = (event) => {
    if (Object.keys(event)?.length > 0) {
      const propname = Object.keys(event)[0];
      const value = Object.values(event)[0];

      setnewelement({ ...newelement, [propname]: value });
    }
  };

  const onFinish = async () => {
    console.log('finish');
  };

  if (teamsLoadable.state === 'loading') {
    return <Loader title="Csapatok betöltése..." />;
  }

  if (teamsLoadable.state === 'hasError') {
    return <WarningPanel text={`${teamsLoadable.contents}`} />;
  }

  return (
    <div className="teams-page">
      <div className="page-header">
        <Button
          onClick={showModal}
          className="mf-button-style"
          type="primary"
          shape="round"
          icon={<PlusCircleOutlined />}
        >
          Új csapat
        </Button>
      </div>
      <div className="list">
        {teamsLoadable.contents.map((team) => (
          <TeamBox key={team._id} team={team} />
        ))}
      </div>
      <Modal title="Új csapat" className="mf-modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <section className="team-created-modal">
          <Form form={form} layout="vertical" onValuesChange={onValueChanges} onFinish={onFinish} size="middle">
            <TeamModal newelement={newelement} groups={groupsLoadable} flags={flagsLoadable} />
          </Form>
        </section>
      </Modal>
    </div>
  );
};

export default TeamsPage;
