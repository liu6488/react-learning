import React, { useEffect, useRef, useState } from "react";
import { Tabs, Statistic, Divider, Button, Form, Input } from "antd";
import style from "./style.module.scss";


const UseStateDemo: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="普通更新" key="1">
        <NormalUpdateDemo />
      </Tabs.TabPane>
      <Tabs.TabPane tab="函数更新" key="2">
        <FunctionUpdateDemo />
      </Tabs.TabPane>
    </Tabs>
  )
}

// 普通更新
const NormalUpdateDemo: React.FC = () => {
  const [count, setCount] = useState(1000);
  return (
    <div>
      <Statistic title="Count" value={count} />
      <Divider></Divider>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Divider></Divider>

    </div>
  );
}



// 函数更新
const FunctionUpdateDemo: React.FC = () => {
  const [info, setInfo] = useState({
    username: '刘畅',
    age: 18
  })

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setInfo(values);
  };

  return (
    <>
      <div className="info">
        <div className={style.infoItem}>
          <div className="info-label">姓名：</div>
          <div className="info-value">{info.username}</div>
        </div>
        <div className={style.infoItem}>
          <div className="info-label">年龄：</div>
          <div className="info-value">{info.age}</div>
        </div>
      </div>

      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />

        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}





export default UseStateDemo;