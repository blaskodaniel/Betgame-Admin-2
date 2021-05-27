import { Spin } from 'antd';

const Loader = ({ title }) => {
  return (
    <div className="loader">
      {title}
      <Spin />
    </div>
  );
};

export default Loader;
