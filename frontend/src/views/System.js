import React from "react";
import './App.scss';
import '../styles/styles.scss'
import { connect } from "react-redux";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import DashBoard from './components/pagedashboard';
import Option from './components/pageoption';
import History from './components/pagehistory';
import Connect from './components/pageconnect';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




class System extends React.Component {
    render() {
        console.log('okla',this.props)
        return (
            <Router>
                <div className='background'></div>
                <Sidebar></Sidebar>
                <div className='content'>
                    <Navbar></Navbar>
                    <Switch>
                        <Route path="/system/home" >
                            <DashBoard />
                        </Route>
                        <Route path="/system/option">
                            <Option />
                        </Route>
                        <Route path="/system/history">
                            <History />
                        </Route>
                        <Route path="/system/connect">
                            <Connect />
                        </Route>
                    </Switch>
                </div>
            </Router>
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

export default connect(mapStateToProps,mapDispatchToProps)(System)
