import { Tabs, Button } from "antd";
import { useEffect, useRef } from "react";
 
const UseEffectDemo = () => {
  return (<>
    <Tabs>
      <Tabs.TabPane tab="组件刷新" key="item-1">
      </Tabs.TabPane>
      <Tabs.TabPane tab="数据更新" key="item-2">
        内容 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="组件销毁" key="item-3">
        内容 2
      </Tabs.TabPane>
    </Tabs>
  </>)
}

export default UseEffectDemo;