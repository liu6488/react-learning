import React from "react";
import { Goods } from "./goods";
import './style.css'
import { InputSearch, SelectSearch } from "./Other";

export class Philosophy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originData: [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ],
      current: {},
      keyWord: '',
      isStocked: false
    }
  }
  componentDidMount() {
    this.setState({ current: handle(this.state.originData) })
    // console.log(this.state.current);
  }

  // 输入框筛选
  toSearch(e) {
    if (e.target.value === '') {
      this.setState({
        current: handleByCondition(this.state.originData, false, this.state.isStocked)
      })
      return
    }
    this.setState({
      keyWord: e.target.value,
      current: handleByCondition(this.state.originData, e.target.value, this.state.isStocked)
    })
  }
  // 选择框
  toSelect(e) {
    this.setState({
      isStocked: e.target.checked,
      current: handleByCondition(this.state.originData, this.state.keyWord, e.target.checked)
    })
    console.log(e.target.checked);
  }

  render() {



    return (
      <>
        <div className="p-container">
          <InputSearch change={e => { this.toSearch(e) }}></InputSearch>
          <SelectSearch checked={e => this.toSelect(e)} />
          <Goods goodList={this.state.current}></Goods>
        </div>
      </>
    )
  }
}


// 初次数据处理
const handle = (data) => {
  const result = {}
  data.forEach(item => {
    if (Object.keys(result).includes(item.category)) {
      result[item.category].push(
        {
          name: item.name,
          price: item.price,
          stocked: item.stocked
        }
      )
    } else {
      result[item.category] = [{
        name: item.name,
        price: item.price,
        stocked: item.stocked
      }]
    }
  })
  return result
}

const handleByCondition = (data, keyWord = false, isStocked = false) => {
  console.log('条件筛选', keyWord, isStocked);
  // 如果不存在筛选条件
  if (!keyWord && !isStocked) {
    return handle(data)
  }
  // console.log(keyWord);
  // 如果存在关键字
  if (keyWord) data = data.filter(item => item.name.includes(keyWord))
  if (isStocked) data = data.filter(item => item.stocked)
  return handle(data)
}