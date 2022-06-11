import React from "react";

class Cards extends React.Component {

  /* componentWillReceiveProps(nextProps) {
    this.setState({ icon: nextProps.icon,
      content: nextProps.content
     });  
  } */

  static getDerivedStateFromProps(props, state) {
    if(props.content!==state.content){
        return{
            icon: props.icon,
            content: props.content
        }
    }
}
  

  state={
    icon:this.props.icon,
    name:this.props.name,
    content:this.props.content
  }


  render() {
    return (
      <div className="card p-5 py-3 m-4 col">
        <div className="row">
          <div className="col-8">
            <h2 className="title">{this.state.name}</h2>
            <p className="number">{this.state.content}</p>
          </div>
          <div className="col-4">
          <img src={this.state.icon} className="App-logo" alt="okla"/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Cards;