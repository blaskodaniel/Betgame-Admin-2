import Chart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { currentUser } from '../statemanager/atoms';

const MFChart = () => {
  const currentuser = useRecoilValue(currentUser);

  const options = {
    chart: {
      id: 'basic-bar',
      width: '100%',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: 'series-2',
      data: [10, 60, 23, 54, 90],
    },
  ];
  return (
    <div className="chart">
      <div className="chart-head">
        <h3>Followers</h3>
        <i className="las la-cog" />
      </div>
      <div className="chart-content">
        <Chart options={options} series={series} type="line" />
      </div>
    </div>
  );
};

export default MFChart;
