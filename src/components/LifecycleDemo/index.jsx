import React from 'react';

export default class LifecycleDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  render() {
    return (
      <div>
        <div>Hello, my name is {this.state.name}</div>
      </div>
    );
  }
}
