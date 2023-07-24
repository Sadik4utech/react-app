import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import type { WorkLoad as LoadType } from '../constants';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 1,
        borderRadius: 100,
      },
    },
    // responsive: true
};

const Chart = ({ workload } : { workload: LoadType[] }) => {


    // const labels = 

    const data = {
        labels: workload.map((work) => work.user),
        datasets: [
            {
                label: 'Workload',
                data: workload.map((work) => work.load),
                backgroundColor: 'blue',
            }
        ]
      };
    
  return (<>
    <Bar options={options} data={data} />
  </>)
}

export default Chart