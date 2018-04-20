import React from "react";

class SubmitTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      parent: '',
      parents: [],
      children: []
    };

    this.appendTag = this.appendTag.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleChildChange = this.handleChildChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  appendTag(tag) {
    console.log("tags:" + tag);
    var newArray = this.state.parents.slice();
    newArray.push(tag);
    this.setState({parents: newArray});
    console.log(this.state.parents);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  // what needs to happen here is the state here needs a parent and a parents, so I can update the text and run a function looking for a , every time. The comma
    // will separate and add to a list of tags displayed beneath the form input element, instead of running two functions explicity in the call
    // for onChange i'll just call the check tags function every time there's a comma typed.
  handleParentChange(event) {
    console.log("handleParentChange is running");
    this.setState({parent: event.target.value});
    if (this.state.parent.includes(",")) {
        this.appendTag(this.state.parent.replace(",", ''));
        this.setState({parent: ''});
    }
  }

  handleChildChange(event) {
    this.setState(this.children.push(event.target.value));
  }

  handleSubmit(event) {
    console.log(this.state.tag);
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div>
      <h3>Submit new tag</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Name:<input type="text" value={this.state.name} onChange={this.handleNameChange} /></label>
        <label>Parent Tags:<input type="text" value={this.state.parent} onChange={this.handleParentChange} /></label>
        <p>{this.state.parents}</p>
        <label>Child Tags:<input type="text" value={this.state.children} onChange={this.handleChildChange} /></label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
  }
}

export default SubmitTag 
