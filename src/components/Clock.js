import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        {/* <h1>Hello, world!</h1> */}
        <h1 style={fontStyle}>
          今天是2022年1月13号
          <br />
          请点击查收您的礼物👇👀🎁
          {/* {this.state.date.toLocaleTimeString()} */}
        </h1>
      </div>
    );
  }
}

const fontStyle = {
  color: '#e85a4f',
  paddingLeft: '100px',
  fontFamily: 'Gill Sans, sans-serif',
  fontSize: '70px',
  font: 'bold',
};

export default Clock;
