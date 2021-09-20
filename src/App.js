import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: 'クリック前の表示' }
  }
  changeDescription() {
    this.setState({
      description: 'クリック後の表示です。'
    })
  }
  render() {
    const { description } = this.state;
    return (
      <div>
        { description }
        <List title="取り扱い一覧" />
        <Form />
        <button onClick={() => this.changeDescription()}>
          ボタン
        </button>
      </div>
    )
  }
}

export default App;
