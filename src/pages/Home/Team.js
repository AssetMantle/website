import React from 'react';

import teamMemberData from "../../data/teamData";
import TeamMemberCard from '../../components/TeamMemberCard';
import { ButtonSecondary } from '../../components/Buttons';

export default function Team() {
  return (
    <section className="section_team">
        <h2>Meet the team</h2>
        <p>Get to know the AssetMantle team </p>
        <div className="section_team__container">
          {teamMemberData[0] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[0].image !== null &&
                teamMemberData[0].image !== undefined &&
                teamMemberData[0].image !== ""
                  ? teamMemberData[0].image
                  : "placeholder.png"
              }
              name={teamMemberData[0].name}
              position={teamMemberData[0].designation}
              social={teamMemberData[0].social}
              key={teamMemberData[0].name + teamMemberData[0].designation}
            />
          )}
          {teamMemberData[1] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[1].image !== null &&
                teamMemberData[1].image !== undefined &&
                teamMemberData[1].image !== ""
                  ? teamMemberData[1].image
                  : "placeholder.png"
              }
              name={teamMemberData[1].name}
              position={teamMemberData[1].designation}
              social={teamMemberData[1].social}
              key={teamMemberData[1].name + teamMemberData[1].designation}
            />
          )}
          {teamMemberData[2] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[2].image !== null &&
                teamMemberData[2].image !== undefined &&
                teamMemberData[2].image !== ""
                  ? teamMemberData[2].image
                  : "placeholder.png"
              }
              name={teamMemberData[2].name}
              position={teamMemberData[2].designation}
              social={teamMemberData[2].social}
              key={teamMemberData[2].name + teamMemberData[2].designation}
            />
          )}
          {teamMemberData[3] && (
            <TeamMemberCard
              imgSrc={
                teamMemberData[3].image !== null &&
                teamMemberData[3].image !== undefined &&
                teamMemberData[3].image !== ""
                  ? teamMemberData[3].image
                  : "placeholder.png"
              }
              name={teamMemberData[3].name}
              position={teamMemberData[3].designation}
              social={teamMemberData[3].social}
              key={teamMemberData[3].name + teamMemberData[3].designation}
            />
          )}
        </div>
        <div className="section_team__button">
          <ButtonSecondary text="View More" href="/about#team" />
        </div>
      </section>
  )
}
