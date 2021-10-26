import React from 'react';
import {withRouter} from 'react-router';

const Wrap = props => {
  return (
    <>
      {props?.children}
    </>
  )
}

// defaultProps
Wrap.defaultProps = {
};

export default withRouter(Wrap);
