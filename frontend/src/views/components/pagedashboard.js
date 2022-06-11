import React from "react";
import humi from '../humidity.svg'
import light from '../light.svg'
import sensor from '../sensor.svg'
import poweron from '../poweron.svg'
import poweroff from '../poweroff.svg'
import Chart from './chart'
import Cards from "./card";
import axios from 'axios'
import { connect } from "react-redux";
import {controllerPump, getDataPump, getDataHumi, getDataLight} from '../../services/sensorSevice'




class DashBoard extends React.Component {

    componentDidMount() {
        setInterval(() =>this.updateData(), 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    } 
    state={
        valueHumi:0,
        valueLight:0,
        valuePump:0,
        hisHumi:[],
        hisLight:[]

    }
    data=this.props.dataredux.okla1

    updateData=async ()=>{
        //await controllerPump(this.data.usernameAda,this.data.pump,this.data.iokey,0)
        let a=await getDataPump(this.data.usernameAda,this.data.pump)
        let b=await getDataHumi(this.data.usernameAda,this.data.humi)
        let c=await getDataLight(this.data.usernameAda,this.data.light)

        let datapump=Array.from(a.data).map((x)=>x.value)
        let datahumi=Array.from(b.data).map((x)=>x.value)
        let datalight=Array.from(c.data).map((x)=>x.value)
        this.setState({
            valuePump:parseInt(datapump[0]),
            valueHumi:datahumi[0],
            valueLight:datalight[0],
            hisHumi:datahumi,
            hisLight:datalight
        })
    }

    updatePump=async()=>{
        await controllerPump(this.data.usernameAda,this.data.pump,this.data.iokey,(this.state.valuePump-1)*(this.state.valuePump-1))
    }

    render() {
        //console.log('okla')
        return (
            <div className='page mt-4'>
                <div className='row'>
                    <Cards icon={humi}
                    name='Độ ẩm'
                    content={this.state.valueHumi}
                    />
                    <Cards icon={light}
                    name='Ánh sáng'
                    content={this.state.valueLight}
                    />
                    <Cards icon={sensor}
                    name='Thiết bị'
                    content='2'/>
                    {/* <Cards 
                    icon={this.state.valuePump ? poweron: poweroff} 
                    name='Bơm'
                    content={this.state.valuePump ? 'Bật': 'Tắt'}/> */}
                    <div className="card p-5 py-3 m-4 col"
                    onClick={()=>this.updatePump()}
                    >
                        <div className="row">
                        <div className="col-8">
                            <h2 className="title">Bơm</h2>
                            <p className="number">{this.state.valuePump ? 'Bật': 'Tắt'}</p>
                        </div>
                        <div className="col-4">
                        <img src={this.state.valuePump ? poweron: poweroff}  className="App-logo" alt="okla"/>
                        </div>
                        
                        </div>
                    </div>
                </div>

                <Chart
                valuehumi={this.state.hisHumi}
                valuelight={this.state.hisLight}
                />
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


export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)