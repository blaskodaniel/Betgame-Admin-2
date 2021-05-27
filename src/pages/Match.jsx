import { useParams } from 'react-router-dom';

const MatchPage = () => {
  const { matchid } = useParams();
  return <p>Match Page {matchid}</p>;
};

export default MatchPage;
