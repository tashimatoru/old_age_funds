import React from 'react';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

class Error404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        Error404
      </>
    );
  }
};

// defaultProps
Error404.defaultProps = {
};

export default withRouter(Error404);
