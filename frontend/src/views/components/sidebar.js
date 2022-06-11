import React from "react";
import leaf from '../leaf.svg'
import{
    Link,
    NavLink
} from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar p-3">
                <div>
                    <img src={leaf} className="logo"/>
                    <span className="logo-title">Smart garden</span>
                </div>
                <hr/>
                <Link to ="/system/home">Bản điều khiển</Link>
                <Link to ="/system/option" >Điều chỉnh</Link>
                <Link to ="/system/history" >Lịch sử hoạt dộng</Link>
                <Link to ="/system/connect" >Kết nối</Link>  
                
            </div >
        );
    }
}

export default Sidebar;