import React from 'react';
import {withRouter} from 'react-router';

// material-ui
import Typography from '@material-ui/core/Typography';

// parts
import Input from "contents/_parts/input";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Typography
          variant="h4"
        >
          老後資金シミュレーター
        </Typography>

        {/* 入力フォーム */}
        <Input
          data={[
            // 金額
            {key: "hoge1", type: "money"},
            {key: "hoge2", type: "money", label: "ラベル", defaultValue: 12345, endAdornment: "単位", helperText: "helperTextだぞ"},

            // 年齢
            {key: "hoge3", type: "age"},
            {key: "hoge4", type: "age", label: "ラベル", defaultValue: 12345, endAdornment: "単位", helperText: "helperTextだぞ"},

            // 日付
            {key: "hoge5", type: "date"},
            {key: "hoge6", type: "date", label: "ラベル", defaultValue: "2021-04-05", helperText: "helperTextだぞ"},
          ]}
          wrapper={(children) => {
            return (
              <div>
                {children}
              </div>
            )
          }}
          callback={(data) => {
            console.log("入力したぞ");
            console.log(data);
          }}
        />
      </>
    );
  }
};

// defaultProps
Index.defaultProps = {
};

export default withRouter(Index);
