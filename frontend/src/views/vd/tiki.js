import React from "react";
import axios from 'axios'

const tk =function(){
    for(var i=1;i<10;i++){
        console.log(i)
    }
}


class Tiki extends React.Component{

    
    async gettikiinfo(){
        const form = new FormData();
        form.append('value', '4');

    const response = await axios.get(
        'https://api.tiki.vn/sandseel/api/v2/public/markets/asaxu/depth'
    );
    let listcost= response.data.asks
    let listxu = response.data.bids
    const klasban = listcost.map((okla)=> Number(okla['1'])).reduce((a, b) => a + b)
    const klasmua = listxu.map((okla)=> Number(okla['1'])).reduce((a, b) => a + b)
    const klxu = listxu.map((okla)=> Number(okla['0'])*Number(okla['1'])).reduce((a, b) => a + b)
    tk()
    this.setState({
        klastramua: klasmua,
        klastraban: klasban,
        kltikixu: klxu
    })
    }

    state={
        klastramua:'',
        klastraban: '',
        kltikixu: ''
    }

    render(){
        return (
            <>
           <div>sô lượng astra trên bán trên sàn: {this.state.klastramua}
           </div>
           <div>sô lượng astra trên mua trên sàn: {this.state.klastraban}
           </div>
           <div>sô lượng xu trên sàn: {this.state.kltikixu}
           </div>
            <button onClick={()=>this.gettikiinfo()}>okla</button>
           </>
        );
    }
}

export default Tiki;