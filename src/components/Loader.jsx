import { Spin } from 'antd';

const Loader = ({ title }) => {
  return (
    <div className="loader">
      <Spin />
      <p>{title}</p>
    </div>
  );
};

export default Loader;
