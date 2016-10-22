import React from 'react';

export default class Autocomplete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {input:"",filteredNames: this.props.names};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange(e) {
    // this.setState({input: e.target.value},this.filter);
    this.filter(e.target.value);
  }

  handleClick(e) {
    // this.setState({input: e.target.innerHTML},this.filter);
        this.filter(e.target.innerHTML);
  }

  filter(input) {
    let filtered = this.props.names.filter( (name) => {
      return name.toLowerCase().startsWith(input.toLowerCase());
    });
    if (filtered.length === 0) {
      this.setState( {filteredNames: ["No matches"], input})
    } else{
      this.setState({filteredNames: filtered, input});
    }
  }

  render () {
    return (
      <figure className="auto">
        <h1>AutoComplete</h1>
        <input value= {this.state.input} onChange={this.handleChange}></input>
        <ul>
          {this.state.filteredNames.map((name) => {
            return <li onClick = {this.handleClick} key={name}>{name}</li>;
          })
        }
        </ul>
      </figure>
    );
  }
}
