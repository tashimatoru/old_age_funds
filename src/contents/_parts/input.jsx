import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

// material-ui
import TextField from '@material-ui/core/TextField';


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange(key, value) {
    this.props.callback({key, value})
  }

  render() {
    return (
      <>
        {(this.props.data || []).map(row => {
          let formNode = null;

          switch (row.type) {
            // 金額
            case "money":
              formNode = (
                <TextField
                  label={row?.label}
                  value={row?.value}
                  helperText={row?.helperText}
                  InputProps={{
                    endAdornment: <>{row?.endAdornment || "円"}</>,
                    inputComponent: NumberFormatCustom,
                  }}
                  onChange={(event) => {this.handleChange(row.key, event.target.value)}}
                  variant="outlined"
                />
              )
              break;

            // 年齢
            case "age":
              formNode = (
                <TextField
                  label={row?.label}
                  value={row?.value}
                  helperText={row?.helperText}
                  InputProps={{
                    endAdornment: <>{row?.endAdornment || "歳"}</>,
                  }}
                  onChange={(event) => {this.handleChange(row.key, event.target.value)}}
                  variant="outlined"
                />
              )
              break;

            // 日付
            case "date":
              formNode = (
                <TextField
                  label={row?.label}
                  type="date"
                  value={row?.value}
                  helperText={row?.helperText}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => {this.handleChange(row.key, event.target.value)}}
                  variant="outlined"
                />
              )
              break;

            default:
              break;
          }

          return (
            <React.Fragment
              key={row.key}
            >
              {(this.props.wrapper) ? this.props.wrapper(formNode) : formNode}
            </React.Fragment>
          )
        })}
      </>
    );
  }
};

// defaultProps
Input.defaultProps = {
  // data
  data: [],
  // wrapper
  wrapper: null,
  // callback
  callback: () => {},
};

export default withRouter(Input);
