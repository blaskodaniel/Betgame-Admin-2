import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  PageHeader,
  Radio,
  Select,
  Switch,
  Tag,
  TreeSelect,
  notification,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { GetMatchById } from '../services/api-functions';

const MatchPage = () => {
  const { matchid } = useParams();
  const routerhistory = useHistory();
  const [match, setmatch] = useState();

  const onValueChanges = () => {};

  useEffect(() => {
    const getmatch = async () => {
      try {
        const resp = await GetMatchById(matchid);
        setmatch(resp.data[0]);
      } catch (e) {
        notification.error({
          message: 'Request error!',
          description: `Error during get match by ${matchid}`,
        });
      }
    };
    getmatch();
  }, [matchid]);

  if (!match) {
    return <p>Loading ....</p>;
  }

  return (
    <div className="mf-match-page">
      <PageHeader
        className="site-page-header"
        tags={<Tag color="black">Running</Tag>}
        onBack={() => routerhistory.goBack()}
        title="Vissza"
        subTitle=""
      />
      <div className="form-wrapper">
        <div className="match-title">
          <div className="box">
            <span className="teamname">{match.teamA.name}</span>
            <Avatar size={20} alt={`${match.teamA.name}-flag`} src={`/flags/${match.teamA.flag}`} className="flag" />
            {match.goalA ?? <span className="score">{match.goalA}</span>}
            <span>-</span>
            {match.goalB ?? <span className="score">{match.goalB}</span>}
            <Avatar size={20} alt={`${match.teamB.name}-flag`} src={`/flags/${match.teamB.flag}`} className="flag" />
            <span className="teamname">{match.teamB.name}</span>
          </div>
        </div>
        <div className="match-editor">
          <Form layout="vertical" onValuesChange={onValueChanges} size="middle">
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Offline</Radio.Button>
                <Radio.Button value="default">Online</Radio.Button>
                <Radio.Button value="large">Running</Radio.Button>
                <Radio.Button value="large">Closed</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: 'Light',
                    value: 'light',
                    children: [
                      {
                        title: 'Bamboo',
                        value: 'bamboo',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Switch">
              <Switch />
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
