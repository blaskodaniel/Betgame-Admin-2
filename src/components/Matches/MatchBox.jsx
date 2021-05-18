import { SyncOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, DatePicker, Form, Input, InputNumber, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';

const dateFormatWithTime = 'DD/MM/YYYY HH:mm';
const dateFormat = 'DD/MM/YYYY';

const MatchBox = ({ match }) => {
  const [matchform] = Form.useForm();
  return (
    <Col className="box">
      <header>
        <div className="teams">
          <span className="teamname">{match.teamA.name}</span>
          <Avatar size={15} alt={`${match.teamA.name}-flag`} src={`/flags/${match.teamA.flag}`} className="flag" />
          {match.goalA ?? <span className="score">{match.goalA}</span>}
          <span>-</span>
          {match.goalB ?? <span className="score">{match.goalB}</span>}
          <Avatar size={15} alt={`${match.teamB.name}-flag`} src={`/flags/${match.teamB.flag}`} className="flag" />
          <span className="teamname">{match.teamB.name}</span>
        </div>
        <div className="status">
          <SyncOutlined spin />
        </div>
      </header>
      <div className="body">
        <Form name={match._id} form={matchform} size="small" layout="vertical">
          <Row gutter={16}>
            <Col sm={12}>
              <Title level={5}>Gólok</Title>
              <div className="goals">
                <Form.Item
                  label={match.teamA.name}
                  name="goalA"
                  initialValue={typeof match?.goalA === 'undefined' ? '' : match?.goalA}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <InputNumber min={0} placeholder="goalA" />
                </Form.Item>
                <Form.Item
                  label={match.teamB.name}
                  name="goalB"
                  initialValue={typeof match?.goalB === 'undefined' ? '' : match?.goalB}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <InputNumber min={0} placeholder="goalB" />
                </Form.Item>
              </div>
            </Col>
            <Col sm={12}>
              <Title level={5}>Odss</Title>
              <div className="odds">
                <Form.Item
                  label={match.teamA.name}
                  name="1"
                  initialValue={match?.oddsAwin || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <InputNumber placeholder="goalA" />
                </Form.Item>
                <Form.Item
                  label="Döntetlen"
                  name="x"
                  initialValue={match?.oddsDraw || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <InputNumber placeholder="goalA" />
                </Form.Item>
                <Form.Item
                  label={match.teamB.name}
                  name="2"
                  initialValue={match?.oddsBwin || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <InputNumber placeholder="goalA" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col sm={24}>
              <Title level={5}>Mérkőzés beállítások</Title>
              <div className="odds">
                <Form.Item
                  label="Státusz"
                  name="1"
                  initialValue={match?.oddsAwin || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <Input placeholder="goalA" />
                </Form.Item>
                <Form.Item label="Dátum" name="datum">
                  <Input />
                </Form.Item>
              </div>
            </Col>
            <Col sm={24}>
              <div className="odds">
                <Form.Item
                  label="Helyszín"
                  name="1"
                  initialValue={match?.oddsAwin || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <Input placeholder="goalA" />
                </Form.Item>
                <Form.Item
                  label="Megjegyzések"
                  name="2"
                  initialValue={match?.oddsBwin || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <Input placeholder="goalA" />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <footer>
        <Button type="primary" htmlType="button" danger>
          Mentés
        </Button>
      </footer>
    </Col>
  );
};

export default MatchBox;
