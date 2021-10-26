import React from 'react';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        老後資金シミュレーター
      </>
    );
  }
};

// defaultProps
Index.defaultProps = {
};

export default withRouter(Index);
