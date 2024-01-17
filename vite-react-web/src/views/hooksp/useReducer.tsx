
import { useReducer } from "react";
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/atom-one-dark.css";
import style from "./style.module.scss";


const UseReducerDemo: React.FC = () => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const initialState: any = { count: 0 };
  // 使用useReducer创建状态和更新状态的函数
  const [state, dispatch] = useReducer(reducer, initialState);

  // 渲染组件
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}
      >+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}
      >-</button>
      <Markdown className={style.intromd} rehypePlugins={[rehypeHighlight]}
      >{introMarkDown}
      </Markdown>
    </div>
  );
}


const introMarkDown = `
# 使用useReducer创建一个store，该store包含一个状态和一个更新状态的函数

\`\`\`js
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const initialState: any = { count: 0 };
// 使用useReducer创建状态和更新状态的函数
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

#  使用
\`\`\` jsx
  <div>
    <div>Count: {state.count}</div>
    <button onClick={() => dispatch({ type: 'increment' })}
    >+</button>
    <button onClick={() => dispatch({ type: 'decrement' })}
    >-</button>
  </div>
\`\`\`
`


export default UseReducerDemo;