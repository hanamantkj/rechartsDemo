import React, { Component } from "react";

const Shrink = ({click}) => (
  <div className="shrink">
    <div onClick={() => click(true)} className="expand-icon">
    
      x
    </div>
    min
  </div>
);
const Max = ({click}) => (
  <div className="expand">
    <div onClick={() => click(false)} className="expand-icon">
     
      x
    </div>
    max
  </div>
);

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
    
    this.click=this.click.bind(this);
  }
  click(val) {
    console.log("clicked",val);
    let value=val;
    this.setState({ expand: value});
  }
  render() {
    return (
      <div className={this.state.expand ? "" : "root"}>
        {!this.state.expand ? <Shrink click={this.click} /> : <Max click={this.click}/>}
      </div>
    );
  }
}

export default Expand;
