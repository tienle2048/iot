import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import classnames from 'classnames'
import '../services/userSevice'
import '../styles/login.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {handleLoginApi,handleSignupApi} from '../services/userSevice';


class Login extends React.Component {
    myFunction= ()=>{ 
        this.props.history.push("/system/home"); 
    } 
    state={
        loginActive: true,
        formlogin:{
            email:"",
            pass:""
        },
        formsignup:{
            email:"",
            pass:""
        },
        loginAlert:"",
        signupAlert:""
    }

    handleOnChangeEmailLogin = (e)=>{
        this.setState({
            formlogin:{
                email:e.target.value,
                pass:this.state.formlogin.pass
            },
            loginAlert:""
        })
    }
    handleOnChangePassLogin = (e)=>{
        this.setState({
            formlogin:{
                email:this.state.formlogin.email,
                pass:e.target.value
            },
            loginAlert:"",
        })
    }
    handleOnChangeEmailSignup = (e)=>{
        this.setState({
            formsignup:{
                email:e.target.value,
                pass:this.state.formsignup.pass
            },
            signupAlert:""
        })
    }
    handleOnChangePassSignup = (e)=>{
        this.setState({
            formsignup:{
                email:this.state.formsignup.email,
                pass:e.target.value
            },
            signupAlert:""
        })
    }
    

    handleLogin=async ()=>{
        
        let data= await handleLoginApi(this.state.formlogin.email,this.state.formlogin.pass)
        if (data.data.errCode===1){
            this.setState({loginAlert:"Vui lòng nhập đầy đủ email và mật khẩu"})
        }
        else if(data.data.errCode===2){
            this.setState({loginAlert:"Mật khẩu không đúng vui lòng nhập lại"})
        }
        else if(data.data.errCode===3) {
            this.setState({loginAlert:"Tài khoản không tồn tại"})
        }
        else{
            await this.props.okla(data.data.userdata)
            console.log(this.props)
            this.myFunction()
            //window.location.reload()
        }
    }

    handleSignup=async ()=>{
        let data=await handleSignupApi(this.state.formsignup.email,this.state.formsignup.pass)
        if (data.data.errCode===1){
            this.setState({signupAlert:"Vui lòng nhập đầy đủ email và mật khẩu"})
        }
        else if(data.data.errCode===2){
            this.setState({signupAlert:"Địa chỉ eamil này đã được dùng "})
        }
        else {
            this.setState({signupAlert:"Đăng ký thành công vui lòng chuyển sang đăng nhập"})
        }
    }


    render() {
        let loginClass=classnames({
            'nav-link' :true,
            'btl': true,
            'active': this.state.loginActive
        })

        let signupClass=classnames({
            'nav-link' :true,
            'btl': true,
            'active': !this.state.loginActive
        })

        let loginBodyClass=classnames({
            'tab-pane':true,
            'fade' : true,
            'active': this.state.loginActive,
            'show': this.state.loginActive
        })

        let signupBodyClass=classnames({
            'tab-pane':true,
            'fade' : true,
            'active': !this.state.loginActive,
            'show': !this.state.loginActive
        })
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card-login">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item text-center">
                            <a className={loginClass} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>this.setState({loginActive: true})}>Login</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className={signupClass} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true" onClick={()=>this.setState({loginActive: false})}>Signup</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className={loginBodyClass} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="form px-4 pt-5">
                                <input type="email" name="" className="form-control" placeholder="Email" value={this.state.formlogin.email} onChange={(e)=>this.handleOnChangeEmailLogin(e)}/>
                                <input type="password" name="" className="form-control" placeholder="Password" value={this.state.formlogin.pass} onChange={(e)=>this.handleOnChangePassLogin(e)}/>
                                <p className="alertlogin">{this.state.loginAlert}</p>
                                <button className="btn btn-dark btn-block" onClick={()=>this.handleLogin()}>Login</button>
                            </div>
                        </div>
                        <div className={signupBodyClass} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="form px-4 pt-5">
                                <input type="text" name="" className="form-control" placeholder="Email" value={this.state.formsignup.email} onChange={(e)=>this.handleOnChangeEmailSignup(e)}/>
                                <input type="text" name="" className="form-control" placeholder="Password" value={this.state.formsignup.pass} onChange={(e)=>this.handleOnChangePassSignup(e)}/>
                                <p className={this.state.signupAlert!=="Đăng ký thành công vui lòng chuyển sang đăng nhập" ? "alertlogin" : "alertsuccesslogin" }>{this.state.signupAlert}</p>
                                <button className="btn btn-dark btn-block" onClick={()=>this.handleSignup()}>Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
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


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))