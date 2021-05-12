import { Col, Row } from 'antd';
import Chart from 'react-apexcharts';

const HomePage = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
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
    <Row>
      <Col>
        <h1> This is the home page</h1>
        <Chart options={options} series={series} type="line" width="100%" />
      </Col>
    </Row>
  );
};

export default HomePage;
