import React from "react";
import { connect } from "react-redux";
import { controllerPump, getDataPump, getDataHumi, getDataLight,handleUpdate } from '../../services/sensorSevice'
class Connect extends React.Component {

    state={
        'email':this.props.dataredux.okla1.email,
        'humi':this.props.dataredux.okla1.humi,
        'light':this.props.dataredux.okla1.light,
        'pump':this.props.dataredux.okla1.pump,
        'usernameAda':this.props.dataredux.okla1.usernameAda,
        'iokey':this.props.dataredux.okla1.iokey
    }

    handlehumi=(e)=>{
        this.setState({
            'humi':e.target.value
        })
    }
    handlelight=(e)=>{
        this.setState({
            'light':e.target.value
        })
    }
    handlepump=(e)=>{
        this.setState({
            'pump':e.target.value
        })
    }
    handleuser=(e)=>{
        this.setState({
            'usernameAda':e.target.value
        })
    }
    handleiokey=(e)=>{
        this.setState({
            'iokey':e.target.value
        })
    }

    updateUserData= async()=>{
        await handleUpdate(this.state.email,this.state.humi,this.state.light,this.state.pump,this.state.usernameAda,this.state.iokey)
        this.props.okla(this.state)
    }


    render() {
        //this.props.okla(this.state)
        console.log(this.props)
        return (
            <div className='page mt-4'>
               <div className="option-scope h-25">
                    <div className="name-option">
                        Cảm biến độ ẩm:
                    </div>
                    <div className="select-option">
                        <input type="text" value={this.state.humi} onChange={(e)=>this.handlehumi(e)}></input>
                    </div>
                </div>
                <hr />
                <div className="option-scope">
                    <div className="name-option">
                        Cảm biến ánh sáng:
                    </div>
                    <div className="select-option">
                        <input type="text" value={this.state.light} onChange={(e)=>this.handlelight(e)}></input>
                    </div>
                </div>
                <hr/>
                <div className="option-scope">
                    <div className="name-option">
                        Máy bơm:
                    </div>
                    <div className="select-option">
                        <input type="text" value={this.state.pump} onChange={(e)=>this.handlepump(e)}></input>
                    </div>
                </div>
                <hr/>
                <div className="option-scope">
                    <div className="name-option">
                        UserName-Ada:
                    </div>
                    <div className="select-option">
                        <input type="text" value={this.state.usernameAda} onChange={(e)=>this.handleuser(e)}></input>
                    </div>
                </div>
                <hr/>
                <div className="option-scope">
                    <div className="name-option">
                        IO-key:
                    </div>
                    <div className="select-option">
                        <input type="text" value={this.state.iokey} onChange={(e)=>this.handleiokey(e)}></input>
                    </div>
                </div>
                <button onClick={()=>this.updateUserData()}>cập nhật</button>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {dataredux:state}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        okla:(data)=>dispatch({type:'okla',payload:data})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Connect)