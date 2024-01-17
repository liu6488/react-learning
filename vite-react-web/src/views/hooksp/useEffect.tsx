import { Tabs, Button } from "antd";
import { useEffect, useRef } from "react";
import CodeBlock from "../../components/CodeBlock";


const componentUpdate = `
#  组件刷新
\`\`\`js
useEffect(()=>{
  initData()
})
\`\`\`
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
