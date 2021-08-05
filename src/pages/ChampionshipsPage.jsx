import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useRecoilValueLoadable } from 'recoil';
import { Button, Form, Modal, notification } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import moment from 'moment';
import Loader from '../components/Loader';
import WarningPanel from '../components/WarningPanel';
import { getChampionshipsSelector } from '../statemanager/selectors';
import Championship from '../components/Championships/Championship';
import CreatedModal from '../components/Championships/CreatedModal';
import { randomGen } from '../utils/common';
import { CreateChampionships } from '../services/api-functions';

const ChampionshipsPage = () => {
  const [form] = useForm();
  const champsLoadable = useRecoilValueLoadable(getChampionshipsSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newelement, setnewelement] = useState({
    displayname: '',
    name: '',
    startdate: '',
    stopdate: '',
    enabled: 'false',
    invitationcode: '32tdsdgsdg23',
  });

  const generateName = (displayname) => {
    return displayname
      .replace(/[^a-z0-9_]+/gi, '')
      .replace(/^-|-$/g, '')
      .toLowerCase();
  };

  const generateInvCode = () => {
    const rand = randomGen(10);
    setnewelement({ ...newelement, invitationcode: rand });
    form.setFieldsValue({ invitationcode: rand });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    console.log(newelement);
    try {
      await CreateChampionships(newelement);
      notification.success({
        message: 'Sikeres mentés',
        description: '',
      });
      setIsModalVisible(false);
    } catch (err) {
      notification.error({
        message: 'Hiba a mentés során',
        description: err.message,
      });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onValueChanges = (event) => {
    if (Object.keys(event)?.length > 0) {
      const propname = Object.keys(event)[0];
      const value = Object.values(event)[0];

      if (moment.isMoment(value)) {
        setnewelement({ ...newelement, [propname]: moment(value).format('YYYY-MM-DD') });
      } else if (propname === 'displayname') {
        const genVal = generateName(value);
        setnewelement({ ...newelement, [propname]: value, name: genVal });
        form.setFieldsValue({ name: genVal });
      } else {
        setnewelement({ ...newelement, [propname]: value });
      }
    }
  };

  const onFinish = async () => {
    console.log('finish');
  };

  if (champsLoadable.state === 'loading') {
    return <Loader title="Bajnokságok betöltése..." />;
  }

  if (champsLoadable.state === 'hasError') {
    return <WarningPanel text={`${champsLoadable.contents}`} />;
  }

  return (
    <div className="champions-page">
      <div className="page-header">
        <Button
          className="mf-button-style"
          onClick={showModal}
          type="primary"
          shape="round"
          icon={<PlusCircleOutlined />}
        >
          Új bajnokság
        </Button>
      </div>
      <div className="list">
        {champsLoadable.contents.map((ch) => (
          <Championship key={ch._id} championship={ch} />
        ))}
      </div>
      <Modal title="Új bajnokság" className="mf-modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <section className="championship-created-modal">
          <Form form={form} layout="vertical" onValuesChange={onValueChanges} onFinish={onFinish} size="middle">
            <CreatedModal newelement={newelement} codegenerator={generateInvCode} />
          </Form>
        </section>
      </Modal>
    </div>
  );
};

export default ChampionshipsPage;
