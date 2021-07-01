import { Form, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const GroupBox = ({ group, teamsLoadable }) => {
  const [form] = useForm();
  return (
    <section className="group-box">
      <div className="group-name">{group.name} csoport</div>
      <Form form={form} layout="horizontal" size="middle" name={group._id}>
        <Form.Item initialValue={group.winteamid} label="Győztes csapat" name="winteamid">
          <Select placeholder="Válassz csapatot">
            {teamsLoadable.state === 'hasValue' &&
              teamsLoadable.contents?.map((x) => (
                <Select.Option key={x._id} value={x._id}>
                  {x.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </Form>
    </section>
  );
};

export default GroupBox;
