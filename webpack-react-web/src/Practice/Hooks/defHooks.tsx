import { useState, useEffect } from 'react';
export default function Counter(proops) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('chang');

  // useEffect(() => {
  //   console.log('into', count);
  //   return () => {
  //     console.log('unMount', count);
  //   };
  // }, [count]);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
      // 此时setCount里面的函数的入参是前一次render之后的count值，所以这样的情况下计时器可以work
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>
        <p>name:{name}</p>
        <button onClick={() => setName(name + 's')}>Change Name</button>
      </div>
    </>
  );
}

// export default class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
//   // componentDidMount() {
//   //   // 发生在页面挂载之后
//   //   console.log('页面挂载后');
//   // }
//   componentDidUpdate() {
//     // 发生在数据更新之后
//     const number  = this.state.count
//     setTimeout(() => {
//       console.log(number);
//     }, 3000);
//     console.log('页面数据更新时');
//   }
//   // componentWillUnmount(){
//   //   // 发生在页面销毁后，新页面打开后
//   //   console.log("页面销毁前");
//   // }
//   setCount(number) {
//     // console.log(number);
//     this.setState({ count: number }, () => {
//       console.log('数据更新后');
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setCount(this.state.count + 1)}>
//           Click me
//         </button>
//       </div >
//     )
//   }
// }
