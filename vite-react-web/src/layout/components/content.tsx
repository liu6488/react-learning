import { Content } from ".."
import { RouterDom } from '../../router/index'
// Layout的主题内容部分
export default function ContentDemo(props: any) {



  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      {RouterDom}
    </Content>
  )
}
