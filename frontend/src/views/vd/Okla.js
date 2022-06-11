import React from "react";
/* import axios from 'axios'
import Okla1 from "./Okla1"
import Okla0 from "./Okla0"
import Tiki from "./tiki" */
import Cards from "../components/card";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

import 'bootstrap'
/* const FormData = require('form-data'); */



class Okla extends React.Component {

    /* 
    async componentDidMount(){
        const form = new FormData();
        form.append('value', '4');

    const response = await axios.post(
    'https://io.adafruit.com/api/v2/tienle/feeds/doan/data',
    form,
        {
            headers: {
                'X-AIO-Key': 'aio_ncEs02L8tGfE34TnWj0yRVnbiI37'
            }
        }
    );
    console.log(response)
    } */

    state = {
        name: [
        ]
    }

    addjob = (job) => {
        console.log(job)
        this.setState({
            name: [...this.state.name, job]
        })
    }

    deletejob = (okla) => {

        let current = this.state.name

        current = current.filter(item => item.job !== okla.job)
        console.log('okla', current, okla)
        this.setState({
            name: current
        })
    }


    render() {
        return (
            <div>
                {/* <Okla1 
                    func={this.addjob}
               />
               <Okla0 
                    name ={this.state.name}
                    func1={this.deletejob}
               />
                <Tiki/> */}
                <div className="row" >
                    <div className="col-2" >
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-10">
                        <Navbar></Navbar>
                        <div className="col row">
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Okla;