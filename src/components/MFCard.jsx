const MFCard = ({ title, value, icon, type }) => {
  return (
    <div className={`card ${type === 'alert' && 'alert-bg'}`}>
      <div className="card-icon background">
        <i className={icon} />
      </div>
      <div className="card-info">
        <h2>{value}</h2>
        <small>{title}</small>
      </div>
    </div>
  );
};

export default MFCard;
