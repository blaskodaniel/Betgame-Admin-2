import { Button, Col, DatePicker, Form, InputNumber, PageHeader, Radio, Row, Select, notification } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import Loader from '../components/Loader';
import { getMatchSelector, getTeamsSelector } from '../statemanager/selectors';
import { MatchTypes } from '../utils/constants/matchtype';
import { antdBreakpoints } from '../utils/constants/breakpoints';

const MatchPage = () => {
  const [form] = Form.useForm();
  const { matchid } = useParams();
  const routerhistory = useHistory();
  const isTablet = useMediaQuery({ query: `(max-width: ${antdBreakpoints.sm})` });
  const matchLoadable = useRecoilValueLoadable(getMatchSelector(matchid));
  const teamsLoadable = useRecoilValueLoadable(getTeamsSelector);

  const back = () => {
    routerhistory.goBack();
  };

  const onValueChanges = () => {};

  if (matchLoadable.state === 'loading') {
    return <Loader title="Mérkőzés betöltése..." />;
  }

  if (matchLoadable.state === 'hasError') {
    throw matchLoadable.contents;
  }

  return (
    <div className="mf-match-page">
      <PageHeader className="site-page-header" onBack={back} title="Vissza" subTitle="" />
      <div className="form-wrapper">
        <div className="match-title">
          <div className="box">
            <span className="teamname">{matchLoadable.contents.teamA.name}</span>
            <Avatar
              size={20}
              alt={`${matchLoadable.contents.teamA.name}-flag`}
              src={`/flags/${matchLoadable.contents.teamA.flag}`}
              className="flag"
            />
            <div className="goal-wrapper">
              {matchLoadable.contents.goalA ?? <span className="score">{matchLoadable.contents.goalA}</span>}
              <span>:</span>
              {matchLoadable.contents.goalB ?? <span className="score">{matchLoadable.contents.goalB}</span>}
            </div>
            <Avatar
              size={20}
              alt={`${matchLoadable.contents.teamB.name}-flag`}
              src={`/flags/${matchLoadable.contents.teamB.flag}`}
              className="flag"
            />
            <span className="teamname">{matchLoadable.contents.teamB.name}</span>
          </div>
        </div>
        <div className="match-editor">
          <Form form={form} layout="vertical" onValuesChange={onValueChanges} size="middle">
            <Row>
              <Col>
                <Form.Item initialValue={matchLoadable.contents.active.toString()} label="Státusz" name="active">
                  <Radio.Group buttonStyle="solid" size={isTablet ? 'small' : 'middle'}>
                    <Radio.Button value="-1">Offline</Radio.Button>
                    <Radio.Button value="0">Online</Radio.Button>
                    <Radio.Button value="1">Running</Radio.Button>
                    <Radio.Button value="2">Closed</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={6}>
                <Form.Item initialValue={matchLoadable.contents.teamA._id} label="Hazai" name="teamA">
                  <Select>
                    {teamsLoadable.state === 'hasValue' &&
                      teamsLoadable.contents?.map((x) => (
                        <Select.Option key={x._id} value={x._id}>
                          {x.name}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={6}>
                <Form.Item initialValue={matchLoadable.contents.goalA} label="Hazai gólszám" name="goalA">
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col xs={24} sm={6}>
                <Form.Item initialValue={matchLoadable.contents.teamB._id} label="Vendég" name="teamB">
                  <Select loading={teamsLoadable.state === 'loading'}>
                    {teamsLoadable.state === 'hasValue' &&
                      teamsLoadable.contents?.map((x) => (
                        <Select.Option key={x._id} value={x._id}>
                          {x.name}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={6}>
                <Form.Item initialValue={matchLoadable.contents.goalB} label="Vendég gólszám" name="goalB">
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center" gutter={16}>
              <Col>
                <Form.Item initialValue={matchLoadable.contents.oddsAwin} label="1" name="oddsAwin">
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item initialValue={matchLoadable.contents.oddsDraw} label="X" name="oddsDraw">
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item initialValue={matchLoadable.contents.oddsBwin} label="2" name="oddsBwin">
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item initialValue={moment(matchLoadable.contents.date)} label="Dátum" name="date">
                  <DatePicker className="maxwidth" format="YYYY-MM-DD HH:mm" showTime />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item initialValue={parseInt(matchLoadable.contents.type, 10)} label="Típus" name="type">
                  <Select>
                    {MatchTypes.map((x) => (
                      <Select.Option key={x.id} value={x.id}>
                        {x.value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item initialValue={matchLoadable.contents.outcome} label="Kimenetel" name="outcome">
                <InputNumber />
              </Form.Item>
            </Row>
            <Row justify="space-between">
              <Col>
                <Form.Item>
                  <Button icon={<LeftOutlined />} type="default" onClick={back}>
                    Vissza
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary">Mentés</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
