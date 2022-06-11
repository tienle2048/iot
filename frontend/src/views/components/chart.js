import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
class Chart extends React.Component {

    

    componentWillReceiveProps(nextProps) {
        this.setState({ data:{
            labels: [0,1,2,3,4,5,6,7,8,9],
            datasets: [
                {
                    label: 'Độ ẩm',
                    data: nextProps.valuehumi.reverse (),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                },
                {
                    label: 'Ánh sáng',
                    data: nextProps.valuelight.reverse (),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)'
                }
            ]
        }
         });  
      }
    
    state={
        data :{
            labels: [0,1,2,3,4,5,6,7,8,9],
            datasets: [
                {
                    label: 'Độ ẩm',
                    data: [],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                },
                {
                    label: 'Ánh sáng',
                    data: [],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)'
                }
            ]
        }


    }


    options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                position: 'bottom',
                display: true,
                text: 'Biểu đồ ánh sáng và độ ẩm'
            }
        }
    }

    
    render() {
        return (
            <div className='chart'>
                <Line options={this.options} data={this.state.data} />
            </div>
        )
    }
}
export default Chart;
