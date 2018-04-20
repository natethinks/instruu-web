import React from "react";

// resource mode consists of ID, Name, Description, URL, Approved, Submitter, Deleted

// no props here since this doesn't need to receive anything, maybe later when you create submit a new child tag of something else then it's parent could be submitted or whatever.
class SubmitResource extends React.Component {
  constructor() {
    super()
    this.state = {
        name: '',
        description: '',
        url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:<input type="text" value={this.state.name} onChange={this.handleChange} /></label>
        <label>Description:<input type="text" value={this.state.description} onChange={this.handleChange} /></label>
        <label>URL:<input type="text" value={this.state.url} onChange={this.handleChange} /></label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SubmitResource
