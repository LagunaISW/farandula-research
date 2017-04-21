import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', response: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.value;
    axios.post('/api/test', { name })
      .then(res => {
        this.setState({ value: '', response: res.data.message })
      })
      .catch(err => {
        this.setState({ response: `Something went wrong: ${err}` })
      });
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
          Enter your name: <br />
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          {' '}
          <input type="submit" value="Submit" />
      </form>
      <p>{ this.state.response }</p>
    </div>
    );
  }
}

export default App;