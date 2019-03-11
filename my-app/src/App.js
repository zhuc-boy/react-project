import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div>
        <h1>helle, world!</h1>
        <h2>现在是{this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

//复合组建
//组建类元素只能有一个顶层标签，否则会报错
class Name extends Component {
  render() {
    return (
      <h1>网站名称:{this.props.name}</h1>
    )
  }
}
//Component是React.component的别名
class Url extends Component {
  render() {
    return (
      <h1>网站地址:{this.props.url}</h1>
    )
  }
}
class Nickname extends Component {
  render() {
    return (
      <h1>网站小名:{this.props.nickname}</h1>
    )
  }
}
class Multicomponent extends Component {
  render() {
    return (
      <div>
        <Name name='firstapp' />
        <Url url='localhost' />
        <Nickname nickname='fa' />
      </div>

    )
  }
}
class Clocktwo extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.method1 = setInterval(
      () => this.tick(), 1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.method1)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>nihao</h1>
        <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
class Likebutton extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ liked: !this.state.liked })
  }
  render() {
    const text = this.state.liked ? 'liked' : 'havent liked';
    return (
      <div onClick={this.handleClick}>
        you {text} this.toggle.click
      </div>
    )
  }
}
function ListItem(props) {
  return <li>{props.value}</li>
}
class Numberlist extends Component {
  constructor(props) {
    super();
    //const numbers=props.numbers;
  }
  render() {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => {
      <ListItem key={number.toString()} value={number} />
    });
    return (
      <ul>
        {listItems} 
      </ul>
    )
  }
}
//JSX 允许在大括号中嵌入任何表达式
/*
  const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('example')
);
 */
export { App }; export { Clock };
export { Multicomponent };
export { Clocktwo };
export { Likebutton };
