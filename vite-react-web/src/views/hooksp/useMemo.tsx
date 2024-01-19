import { useState, useMemo } from 'react'
import CodeBlock from '../../components/CodeBlock';


const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(['JavaScript', 'React', 'Node.js']);

  const expensiveComputation = useMemo(() => {
    console.log('Computing...');
    return count * 2;
  }, [count]);

  const introMarkDown = `
  # useMemo 相当于Vue 的计算属性
  # []内放置依赖的属性，当依赖的属性发生变化时，useMemo 才会重新计算;否则，会直接返回缓存的值。

  \`\`\`js
  const expensiveComputation = useMemo(() => {
    console.log('Computing...');
    return count * 2;
  }, [count]);


 <button onClick={() => setCount(count + 1)}>Increment</button>

 // 当count属性变化的时候才会再次执行函数
  \`\`\`
  `

  return (
    <div>
      <p>Count: {count}</p>
      <p>Books: {books.join(', ')}</p>
      <p>Expensive Computation: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setBooks(['Angular', 'Vue.js', 'Svelte'])}>Update Books</button>

      <CodeBlock markdown={introMarkDown} />
    </div>
  );
};

export default UseMemoDemo;