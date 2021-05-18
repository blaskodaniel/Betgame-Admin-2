import { Row } from 'antd';
import MatchBox from '../components/Matches/MatchBox';

const testTeamA = {
  aktiv: 0,
  draw: 0,
  flag: 'croatia.png',
  getgoal: 2,
  groupid: '60761032a0a5ac087a0249e6',
  kickgoal: 0,
  loss: 1,
  name: 'Horvátország',
  score: 0,
  win: 0,
  __v: 0,
  _id: '607f3f48ff266212e98e9f08',
};

const testTeamB = {
  aktiv: 0,
  draw: 1,
  flag: 'czech-republic.png',
  getgoal: 2,
  groupid: '60761032a0a5ac087a0249e6',
  kickgoal: 2,
  loss: 0,
  name: 'Csehország',
  score: 1,
  win: 0,
  __v: 0,
  _id: '607f3f7cff266212e98e9f0a',
};

const testTeamC = {
  aktiv: 0,
  draw: 1,
  flag: 'italy.png',
  getgoal: 2,
  groupid: '60761017a0a5ac087a0249e3',
  kickgoal: 3,
  loss: 0,
  name: 'Olaszország',
  score: 4,
  win: 1,
  __v: 0,
  _id: '607f3d5aff266212e98e9efc',
};

const testTeamD = {
  aktiv: 0,
  draw: 1,
  flag: 'wales.png',
  getgoal: 3,
  groupid: '60761017a0a5ac087a0249e3',
  kickgoal: 2,
  loss: 1,
  name: 'Wales',
  score: 1,
  win: 0,
  __v: 0,
  _id: '607f3d69ff266212e98e9efd',
};

const testmatch = {
  active: 2,
  date: '2021-05-18 18:00',
  oddsAwin: 2,
  oddsBwin: 3.8,
  oddsDraw: 3.3,
  goalA: 2,
  goalB: 0,
  teamA: testTeamA,
  teamB: testTeamB,
  timer: true,
  type: '1',
  _id: '60983c6d9fafab5a7dae973c',
};

const testmatch2 = {
  active: 0,
  date: '2021-05-10 11:00',
  oddsAwin: 2.32,
  oddsBwin: 1.8,
  oddsDraw: 1.3,
  teamA: testTeamC,
  teamB: testTeamD,
  timer: true,
  type: '1',
  _id: '60983c6d9fafab5a7dae154c',
};

const MatchesPage = () => {
  return (
    <Row className="mf-matches">
      <MatchBox match={testmatch} />
      <MatchBox match={testmatch2} />
    </Row>
  );
};

export default MatchesPage;
