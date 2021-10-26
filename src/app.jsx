import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'router';

// css
import 'style/common';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Router/>
    );
  }
}

// defaultProps
App.defaultProps = {
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
