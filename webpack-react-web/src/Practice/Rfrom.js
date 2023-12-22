import React from 'react';

export class Rform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  // 监听表单修改
  handleChange(event) {
    console.log(event.target.value);
    this.setState({value:event.target.value})
  }
  // 监听表单提交
  handleSubmit(e) {
    console.log(e);
    console.log('提交的名字',this.state.value);
    // 阻止默认行为
    e.preventDefault()
  }
  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <label >
          姓名：
          <input
            id="content"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={this.state.value}
            type="text"
          />
        </label>
        <button>提交</button>
      </form>
    );
  }
}
