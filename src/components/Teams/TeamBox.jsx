import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const TeamBox = ({ team }) => {
  return (
    <section className="team-box">
      <div className="team-flag" style={{ backgroundImage: `url(/flags/${team.flag})` }} />
      <div className="team-info">
        <h2>{team.name}</h2>
        <small>{team.groupid?.name} csoport</small>
        <div className="team-props">
          <div className="prop-wrapper">
            <div className="prop">
              <div>Pont:</div>
              <div>{team.score}</div>
            </div>
            <div className="prop">
              <div>Győzelem:</div>
              <div>{team.win}</div>
            </div>
            <div className="prop">
              <div>Döntetlen:</div>
              <div>{team.draw}</div>
            </div>
            <div className="prop">
              <div>Vereség:</div>
              <div>{team.loss}</div>
            </div>
            <div className="prop">
              <div>Gólok(K/R):</div>
              <div>
                {team.getgoal}/{team.kickgoal}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-button">
        <Tooltip title="Szerkesztés">
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip>
      </div>
    </section>
  );
};

export default TeamBox;
