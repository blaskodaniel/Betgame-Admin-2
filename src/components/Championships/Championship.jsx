import { Button, Col, DatePicker, Form, Input, Radio, Row, notification } from 'antd';
import moment from 'moment';
import { SetChampionships } from '../../services/api-functions';

const Championship = ({ championship }) => {
  const [form] = Form.useForm();

  const onValueChanges = (event) => {
    // console.log(event);
  };

  const onFinish = async (values) => {
    const shallowCopy = {
      ...values,
      _id: championship._id,
      startdate: values.startdate._i,
      stopdate: values.stopdate._i,
    };
    try {
      await SetChampionships(shallowCopy);
      notification.success({
        message: 'Sikeres mentés',
        description: '',
      });
    } catch (e) {
      notification.error({
        message: 'Hiba a mentés során',
        description: e.message,
      });
    }
  };

  return (
    <section className="championship-element">
      <Row>
        <Col>
          <h1>{championship.displayname}</h1>
        </Col>
      </Row>
      <Form layout="vertical" onValuesChange={onValueChanges} onFinish={onFinish} size="middle" name={championship._id}>
        <Row gutter={16}>
          <Col>
            <Form.Item initialValue={championship.displayname} label="Bajnokság neve" name="displayname">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item initialValue={championship.name} label="Bajnokság kódja" name="name">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <Form.Item
              initialValue={moment(championship.startdate, 'YYYY-MM-DD')}
              label="Bajnokság kezdete"
              name="startdate"
            >
              <DatePicker className="maxwidth" format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              initialValue={moment(championship.stopdate, 'YYYY-MM-DD')}
              label="Bajnokság vége"
              name="stopdate"
            >
              <DatePicker className="maxwidth" format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item initialValue={championship.enabled.toString()} label="Engedélyezve" name="enabled">
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="true">Igen</Radio.Button>
                <Radio.Button value="false">Nem</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item initialValue={championship.invitationcode} label="Meghívó kód" name="invitationcode">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end" align="middle">
          <Col>
            <Form.Item className="form-button">
              <Button type="primary" htmlType="submit">
                Mentés
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default Championship;
