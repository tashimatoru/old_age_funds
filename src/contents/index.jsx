import React from 'react';
import {withRouter} from 'react-router';

// material-ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// parts
import Input from "contents/_parts/input";

// utils
import localStorage from "utils/localStorage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 入力データ
      data: [
        // 金額
        {key: "hoge2", type: "money", label: "ラベル", value: "12345", endAdornment: "単位", helperText: "helperTextだぞ"},

        // 年齢
        {key: "hoge4", type: "age", label: "ラベル", value: "12345", endAdornment: "単位", helperText: "helperTextだぞ"},

        // 日付
        {key: "hoge6", type: "date", label: "ラベル", value: "2021-04-05", helperText: "helperTextだぞ"},
      ],
    };

    // ローカルストレージ初期化
    localStorage.init('user_input');
  }

  componentDidMount() {
    // ローカルストレージからデータを読み込む
    this.loadLocalStorageData();
  }

    /**
   * ローカルストレージからデータを読み込む
   */
  loadLocalStorageData() {
    const data = this.state.data.map(row=>{
      let {key, value, ...other} = row;

      return ({
        key,
        value: (localStorage.get(row.key) || value),
        ...other
      })
    });

    this.setState({data});
  }

  /**
   * ローカルストレージにデータを保存
   */
  saveLocalStorageData() {
    this.state.data.forEach(row=>{
      localStorage.store(row.key, (row?.value || null));
    })
  }

  /**
   * 入力フォームの値更新ハンドラ
   * @param key
   * @param value
   */
  handleChangeData(key, value) {
    this.setDataValue(key, value);
  }

  /**
   * データ更新
   * @param data_key
   * @param new_value
   * @returns {boolean}
   */
  setDataValue(data_key, new_value) {
    if (!this.state.data.find(row=>row.key===data_key))
      return false;

    //data.value = value;
    const data = this.state.data.map(row=>{
      let {key, value, ...other} = row;

      return ({
        key,
        value: (key === data_key ? new_value : value),
        ...other
      })
    })

    this.setState({data});
  }

  render() {
    return (
      <>
        <Typography
          variant="h4"
        >
          老後資金シミュレーター
        </Typography>

        <Button
          variant="outlined"
          onClick={() => {
            this.loadLocalStorageData();
          }}
        >
          読み込み
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            this.saveLocalStorageData();
          }}
        >
          保存
        </Button>

        {/* 入力フォーム */}
        <Input
          data={this.state.data}
          wrapper={(children) => {
            return (
              <div>
                {children}
              </div>
            )
          }}
          callback={(data) => {
            this.handleChangeData(
              data.key,
              data.value
            )
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
