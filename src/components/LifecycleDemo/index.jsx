import React from 'react';

export default class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  render() {
    return (
      <div>
        <div>Hello, my name is <b>{this.state.name}</b></div>
        <div>And my age is <b>{this.props.age}</b></div>
      </div>
    );
  }
}

LifecycleDemo.defaultProps = {
  age: 33,
}






    // this.renderCount = 0;

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     name: 'Sergey',
  //   };
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  // componentDidMount() {
  //   this.setState({ name: 'Sergey' });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({ name: 'Albert' });
  // }

  // componentWillUnmount() {
  //   return true;
  // }


    // this.renderCount++;
    // console.log(this.renderCount);
    