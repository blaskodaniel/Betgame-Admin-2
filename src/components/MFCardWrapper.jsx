import MFCard from './MFCard';

const MFCardWrapper = () => {
  return (
    <div className="cards">
      <MFCard title="játékos" value={14} icon="las la-users" />
      <MFCard title="mérkőzés" value={45} icon="las la-futbol" />
      <MFCard title="log" value={250} icon="las la-clipboard" />
      <MFCard title="hiba" value={1} icon="las la-exclamation-circle" type="alert" />
    </div>
  );
};

export default MFCardWrapper;
