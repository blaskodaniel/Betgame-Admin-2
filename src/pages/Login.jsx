import { useState } from 'react';
import { Button, Col, Form, Image, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage = ({ onLogin, loading }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Row className="mf-login" justify="center">
      <div className="panel">
        <Col className="logo-panel">
          <Image src="/img/mokasfoci-logo2.png" preview={false} />
          <span>Admin Panel</span>
        </Col>
        <Col>
          <Form name="login">
            <Form.Item
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              rules={[{ required: true, message: 'Kérlek add meg az email címed!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              rules={[{ required: true, message: 'Kérlek add meg a jelszavad!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                disabled={!email || !password}
                type="primary"
                htmlType="button"
                onClick={() => onLogin(email, password)}
                loading={loading}
              >
                Bejelentkezés
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </div>
    </Row>
  );
};

export default LoginPage;
