
import { useReducer } from "react";
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
    </div>
  );
}


export default UseReducerDemo;