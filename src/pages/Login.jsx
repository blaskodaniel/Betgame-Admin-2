import { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandler from '../components/ErrorHandler';

const LoginPage = ({ onLogin, loading }) => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandler}
      onReset={() => {
        console.log('Ha hiba van akkor itt lehet valamit csinálni');
      }}
    >
      <Row className="mf-login" justify="center">
        <div className="panel">
          <Col className="logo-panel">
            <Image src="/img/mokasfoci-logo2.png" preview={false} />
            <span>Admin Panel</span>
          </Col>
          <Col>
            <Form name="login" form={form}>
              <Form.Item
                name="email"
                initialValue={email}
                onChange={(e) => setEmail(e.target.value)}
                rules={[{ required: true, type: 'email', message: 'Kérlek add meg az email címed!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                initialValue={password}
                onChange={(e) => setPassword(e.target.value)}
                rules={[{ required: true, message: 'Kérlek add meg a jelszavad!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="button"
                    loading={loading}
                    onClick={() => onLogin(email, password)}
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                    Bejelentkezés
                  </Button>
                )}
              </Form.Item>
            </Form>
            <pre className="version">v2.0</pre>
          </Col>
        </div>
      </Row>
    </ErrorBoundary>
  );
};

export default LoginPage;
