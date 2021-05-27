import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import MatchBoxHeader from './MatchBoxHeader';

const dateFormatWithTime = 'DD/MM/YYYY HH:mm';
const dateFormat = 'DD/MM/YYYY';

const { Option } = Select;

const MatchBox = ({ match }) => {
  const [matchform] = Form.useForm();
  return (
    <Col className="mf-matchbox">
      <MatchBoxHeader match={match} />
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
          <Row gutter={16} className="settings">
            <Col sm={12}>
              <Title level={5}>Mérkőzés beállítások</Title>
              <div className="active-type">
                <Form.Item name="active" label="Státusz" initialValue={match.active.toString()}>
                  <Select className="select-field" placeholder="A mérkőzés állapota">
                    <Option value="-1">Offline</Option>
                    <Option value="0">Onnline</Option>
                    <Option value="1">Most játszák</Option>
                    <Option value="2">Lejátszották</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="type" label="Típus" initialValue={match.type.toString()}>
                  <Select className="select-field" placeholder="Típus">
                    <Option value="0">1. csoportkör</Option>
                    <Option value="1">2. csoportkör</Option>
                    <Option value="2">3. csoportkör</Option>
                    <Option value="3">Nyolcaddöntő</Option>
                    <Option value="4">Negyeddöntő</Option>
                    <Option value="5">Elődöntő</Option>
                    <Option value="6">A 3. helyért</Option>
                    <Option value="7">Döntő</Option>
                    <Option value="8">Selejtező</Option>
                  </Select>
                </Form.Item>
              </div>
            </Col>
            <Col sm={24}>
              <div>
                <Form.Item
                  label="Helyszín"
                  name="location"
                  initialValue={match?.oddsAwin || ''}
                  onChange={(e) => console.log(e.target.value)}
                >
                  <Input placeholder="goalA" />
                </Form.Item>
                <Form.Item
                  label="Megjegyzések"
                  name="comment"
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
