import React from 'react';

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
    const name = this.state.value
    this.setState({ value: '', response: `Hello ${name}, from React`})
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