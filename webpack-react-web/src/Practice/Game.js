import React from 'react';
import './index.css';
import { Board } from './Board';
import { Clock } from './clock'
import { Toggle } from './toggle';
import { Multiple, NubmerList } from './multiple';
import { Rform } from './Rfrom';
import { Temperature } from './temperature';
import { Father } from './extends';
import { Counter } from './Hooks/StateHook';
import { Philosophy } from './Philosophy/Index';
import { ContentDemo } from './super/content';
// import { EffectHookDemo } from './Hooks/EffectHook';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 保存历史状态
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0, // 记录步骤
      isEnd: false,
    };
  }

  // 计算胜利者
  calcWinner(squares) {
    const winWay = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of winWay) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  // 单个点击
  handleClick(index) {
    // 当前的井字棋 数据
    const current = this.state.history[this.state.stepNumber].squares.slice();
    // 当前项目选中或者游戏结束 退出
    if (current[index] || typeof this.state.isEnd === 'string') {
      return;
    }
    current[index] = this.state.xIsNext ? 'X' : 'O';

    // history 原来的井字棋 数据
    const origin = this.state.history.slice(0, this.state.stepNumber + 1);
    // console.log(origin, origin.concat({ squares: current }));
    this.setState({
      history: origin.concat({ squares: current }),
      stepNumber: this.state.stepNumber + 1,
      xIsNext: !this.state.xIsNext,
    });
    // 当 棋盘上有五个棋子的时候
    if (this.state.stepNumber > 3) {
      const res = this.calcWinner(current);
      if (res) {
        this.setState({
          isEnd: 'Winner:' + res,
        });
      }
    }
  }

  // 点击跳转到指定项
  jumpTo(index) {
    console.log(index);
    this.setState({
      stepNumber: index,
      xIsNext: index % 2 === 0,
      isEnd: false,
    });
  }

  render() {
    const status = this.state.isEnd || 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const current = this.state.history[this.state.stepNumber].squares;
    const moves = this.state.history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    // eslint-disable-next-line no-unused-vars
    const test = [1, 2, 4].map((item, index) => {
      return (
        <p key={index}>
          {item}
        </p>
      )
    })
    // console.log(test);

    return (
      <div className='container'>
        <div className='basics'>
          <h1>基础</h1>
          <div className="game">
            <div className="game-board">
              <Board
                xIsNext={this.state.xIsNext}
                squares={current}
                outerClick={(index) => {
                  this.handleClick(index);
                }}
              />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
          <div ><Clock /></div>
          <div ><Toggle /></div>
          <div ><Multiple /></div>
          <div ><NubmerList numbers={['a', 'b', 'c']} /></div>
          <Rform></Rform>
          <Temperature></Temperature>
          <Father></Father>
        </div>
        <div className='reactPhi pd3  border-lr'>
          <Philosophy></Philosophy>
        </div>
        <div className='hook pd3'>
          <h1>Hook</h1>
          <div>
            <Counter></Counter>
            {/* <EffectHookDemo></EffectHookDemo> */}
          </div>
        </div>
        <div className='super pd3 border-lr'>
          <h1>高级指引</h1>
          <ContentDemo/>
        </div>
      </div>
    );
  }
}
