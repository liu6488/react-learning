import { Tabs, Button } from "antd";
import { useEffect, useRef } from "react";
import CodeBlock from "../../components/CodeBlock";


const componentUpdate = `
#  组件刷新
\`\`\`js
useEffect(()=>{
  initData()
},[])
\`\`\`

- 当数组为空 [ ]，表示不会因为页面的状态改变而执行回调方法【即仅在初始化时执行，componentDidMount】，
- 当这个参数不传递，表示页面的任何状态一旦变更都会执行回调方法
- 当数组非空，数组里的值一旦有变化，就会执行回调方法
`


const dataUpdate = `
#  数据更新
\`\`\`js
useEffect(()=>{
  dataUpdate()
},[xxx])
\`\`\`
`


const componentDestory = `
#  组件销毁
\`\`\`js
useEffect(()=>{
  return ()=>{

  }
},[])
\`\`\`
`


const UseEffectDemo = () => {
  const dataMap = [{ tabName: '组件刷新', component: componentUpdate }, { tabName: '数据更新', component: dataUpdate }, { tabName: '组件销毁', component: componentDestory }]
  return (<>
    <Tabs>
      {
        dataMap.map((item, index) =>
          <Tabs.TabPane tab={item.tabName} key={index}>
            <CodeBlock markdown={item.component} />
          </Tabs.TabPane>
        )
      }
    </Tabs>
  </>)
}

export default UseEffectDemo;


// 优化后

// const ComponentUpdate = React.memo(() => {
//   return (
//     <>
//       #  组件刷新
//       <pre>
//         <code>
//           useEffect(() => {
//             initData();
//           }, []);
//         </code>
//       </pre>
//     </>
//   );
// });

// const DataUpdate = React.memo(() => {
//   return (
//     <>
//       #  数据更新
//       <pre>
//         <code>
//           useEffect(() => {
//             dataUpdate();
//           }, [xxx]);
//         </code>
//       </pre>
//     </>
//   );
// });

// const ComponentDestory = React.memo(() => {
//   return (
//     <>
//       #  组件销毁
//       <pre>
//         <code>
//           useEffect(() => {
//             return () => {};
//           }, []);
//         </code>
//       </pre>
//     </>
//   );
// });

// const UseEffectDemo = () => {
//   const dataMap = [
//     { tabName: '组件刷新', component: <ComponentUpdate /> },
//     { tabName: '数据更新', component: <DataUpdate /> },
//     { tabName: '组件销毁', component: <ComponentDestory /> },
//   ];

//   return (
//     <React.Fragment>
//       <Tabs>
//         {dataMap.map((item, index) => (
//           <Tabs.TabPane tab={item.tabName} key={index}>
//             <Markdown rehypePlugins={[rehypeHighlight]}>
//               {item.component}
//             </Markdown>
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </React.Fragment>
//   );
// };

// export default UseEffectDemo;
