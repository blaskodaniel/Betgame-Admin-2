import { Button, Col, DatePicker, Form, Input, Radio, Row, Space } from 'antd';

const CreatedModal = ({ newelement, codegenerator }) => {
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Form.Item label="Bajnokság neve" name="displayname">
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Bajnokság kódja" name="name">
            <Input disabled />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item label="Bajnokság kezdete" name="startdate">
            <DatePicker className="maxwidth" format="YYYY-MM-DD" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Bajnokság vége" name="stopdate">
            <DatePicker className="maxwidth" format="YYYY-MM-DD" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item initialValue={newelement.enabled} label="Bekapcsolva" name="enabled">
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="true">Igen</Radio.Button>
              <Radio.Button value="false">Nem</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" align="middle">
        <Space size="middle" align="center">
          <Col>
            <Form.Item initialValue={newelement.invitationcode} label="Meghívó kód" name="invitationcode">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={codegenerator} type="primary">
              Generál
            </Button>
          </Col>
        </Space>
      </Row>
    </>
  );
};

export default CreatedModal;
