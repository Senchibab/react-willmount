import React from "react";
import ReactDOM from "react-dom";
class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("derived called");
    return { name: props.name };
  };

  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    console.log("did update");
  }
  shouldComponentUpdate(props, state) {
    console.log("should update called");
    return props.name.length % 2 === 0;
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log("snapshot called");
    console.log(props);
    return null;
  }
componentWillUnmount() {
    console.log("unmount called ");
 }
  render() {
    console.log("Render");
    console.log(this.state.name);
    return (
      <div>
        <p>Child state name : {this.state.name}</p>
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initial: "" };
  }
  update = e => {
    this.setState({ initial: e.target.value });
  };

  render() {
    return (
      <div>
        <p> Parent state name : {this.state.intial} </p>
        <input value={this.state.initial} onChange={this.update} />
        {this.state.initial.length%2===0 ? <Child name={this.state.initial}/> :null}
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
