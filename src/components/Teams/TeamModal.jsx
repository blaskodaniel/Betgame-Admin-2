import { FlagOutlined } from '@ant-design/icons';
import { Avatar, Col, Form, Image, Input, Row, Select, Skeleton, Space } from 'antd';

const TeamModal = ({ newelement, groups, flags }) => {
  return (
    <section className="team-modal">
      <Row className="preview" align="middle" justify="center">
        <Col>
          {newelement.flag && <Avatar size={60} src={<Image preview={false} src={`/flags/${newelement.flag}`} />} />}
          {!newelement.flag && <Avatar size={60} icon={<FlagOutlined />} />}
          <h2>{newelement.name ? newelement.name : 'Csapat neve'}</h2>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item label="Csapat neve" name="name">
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col flex="auto">
          <Form.Item label="Csoportja" name="groupid">
            <Select placeholder="Válassz csoportot">
              {groups.state === 'hasValue' &&
                groups.contents?.map((x) => (
                  <Select.Option key={x._id} value={x._id}>
                    {x.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col flex="auto">
          <Form.Item label="Csapatzászlója" name="flag">
            <Select showSearch optionLabelProp="label" placeholder="Válassz zászlót">
              {flags.state === 'hasValue' &&
                flags.contents?.data.map((x) => (
                  <Select.Option key={x.name} value={x.name} label={x.name}>
                    <Space>
                      <div role="img" aria-label={x.name}>
                        <Image preview={false} src={`/flags/${x.name}`} width={20} />
                      </div>
                      <div>{x.name}</div>
                    </Space>
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </section>
  );
};

export default TeamModal;
