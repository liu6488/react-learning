import { useState } from 'react';
import style from '../style.module.scss';
import { Form, Input, Button } from 'antd';
// 引入dispatch
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../../store/actions/userActions';

export default function LoginAccount() {
  type LayoutType = Parameters<typeof Form>[0]['layout'];
  const [form] = Form.useForm();
  const [formLayout] = useState<LayoutType>('vertical');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onFinish = async (values: any) => {
    console.log('推送到dispatch');
    const { username, password } = values;
    const loginRes: any = await dispatch(Login(username, password));
    console.log('loginRes', loginRes);
    if (loginRes) {
      navigate('/')
    }


  };
  return (
    <div className={style.container}>
      <Form
        onFinish={onFinish}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
      >
        <Form.Item label="UserName" name="username">
          <Input placeholder="input username" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="input password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
