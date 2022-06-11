import React from "react";
import { controllerPump, getDataPump, getDataHumi, getDataLight } from '../../services/sensorSevice'
import { connect } from "react-redux";

class History extends React.Component {

     componentDidMount() {
        setInterval(() => this.updateHistory(), 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    } 

    data = this.props.dataredux.okla1

    state = {
        date: [],
        value:[]
    }


    updateHistory = async () => {
        let a = await getDataPump(this.data.usernameAda, this.data.pump)
        let hisdate = Array.from(a.data).map((x) => x.expiration)
        let hisvalue = Array.from(a.data).map((x) => parseInt(x.value) ? 'Bật' : 'Tắt')

        this.setState({
            date:hisdate,
            value:hisvalue
        })
    }

    render() {

        let date = this.state.date
        let value= this.state.value
        //console.log(data)
        return (
            <div className='page mt-4'>
                <div className="option-scope h-25">
                    <div className="name-option">
                        Thời gian:
                    </div>
                    <div className="select-option">
                        Trạng thái:
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[0]}
                    </div>
                    <div className="select-option">
                        {value[0]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[1]}
                    </div>
                    <div className="select-option">
                        {value[1]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[2]}
                    </div>
                    <div className="select-option">
                        {value[2]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[3]}
                    </div>
                    <div className="select-option">
                        {value[3]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[4]}
                    </div>
                    <div className="select-option">
                        {value[4]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[5]}
                    </div>
                    <div className="select-option">
                        {value[5]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[6]}
                    </div>
                    <div className="select-option">
                        {value[6]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[7]}
                    </div>
                    <div className="select-option">
                        {value[7]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[8]}
                    </div>
                    <div className="select-option">
                        {value[8]}
                    </div>
                </div>
                <div className="option-scope h-25">
                    <div className="name-option">
                        {date[9]}
                    </div>
                    <div className="select-option">
                        {value[9]}
                    </div>
                </div>




                {/* {
                    data.map((x)=>{
                        <div className="option-scope h-25">
                                    <div className="name-option">
                                        {x}
                                    </div>
                                    <div className="select-option">
                                        {value[]}
                                    </div>
                        </div>
                    })
                } */}


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { dataredux: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        okla: (data) => dispatch({ type: 'okla', payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)