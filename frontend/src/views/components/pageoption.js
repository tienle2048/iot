import React from "react";

class Option extends React.Component {

    render() {
        return (
            <div className='page mt-4'>
                <div className="option-scope">
                    <div className="name-option">
                        Bơm tự động:
                    </div>
                    <div className="select-option">
                        <label>Ánh sáng</label>
                        <br/>
                        <input type="number"></input>
                        
                        <select name="cars" id="cars">
                            <option value="or">Hoặc</option>
                        </select>
                        <br/>
                        <label>độ ẩm</label>
                        <br/>
                        <input type="number"></input>

                    </div>
                </div>
                
                <button type="submid">Lưu</button>
            </div>
        );
    }
}

export default Option;