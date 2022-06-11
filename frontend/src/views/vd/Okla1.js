import React from "react";

class Okla1 extends React.Component{
    state={
        name:""
    }

    changename=(event)=>{
        this.setState({
            name: event.target.value
        })
    }

    sudmitokla=(e)=>{
        e.preventDefault()
        this.props.func({
            job:this.state.name
        })
        this.setState({
            name:""
        })
    }

    render(){
        return(
            <>
                <form>
                    <input type="text" value={this.state.name} onChange={(event)=>this.changename(event)}/>
                    <input type="submit" value="Submit" onClick={(event)=>this.sudmitokla(event)}/>
                </form> 
            </>
        );
    }

}
export default Okla1;