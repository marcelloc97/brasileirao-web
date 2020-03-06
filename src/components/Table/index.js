import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../services/api";

import TableContent from "../TableContent";

export default function Table({ type = "points" }) {
  const [classifications, setClassifications] = useState([]);
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    const load = async () => {
      const clResponse = await api.get("/scoreboard/points");
      setClassifications(clResponse.data);

      const rdResponse = await api.get("/scoreboard/scores");
      setRounds(rdResponse.data);
    };
    load();
  }, []);

  return (
    <>
      {/* Points */}
      {type === "points" && (
        <table className="points-table">
          <tr>
            {" "}
            {/* Header */}
            <th>#</th>
            <th className="left">TIME</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>%</th>
          </tr>
          {classifications.map(cl => (
            <TableContent
              key={cl.id}
              pos={cl.id}
              team={cl.team_name}
              points={cl.points}
              games={cl.games}
              victories={cl.victories}
              draws={cl.draws}
              loses={cl.loses}
              goals_for={cl.goals_for}
              goals_against={cl.goals_against}
              goals_balance={cl.goals_balance}
              utilization={cl.utilization}
              type="points"
            />
          ))}
        </table>
      )}
      {/* Scores */}
      {type === "scores" && (
        <table className="scores-table">
          <tr>
            <th>38ª RODADA</th>
          </tr>
          {rounds.map(rd => (
            <TableContent
              key={rd.id}
              type="scores"
              team={rd.team_alias}
              adversary={rd.adversary_alias}
              scores={[rd.goals_home, rd.goals_away]}
              date={rd.game_date}
              location={rd.stadium_name}
            />
          ))}

          <TableContent
            type="scores"
            team="INT"
            adversary="CAM"
            scores={[2, 1]}
            date="DOM - 08/12 18:00"
            location="Beira-Rio"
          />
          <TableContent
            type="scores"
            team="FOR"
            adversary="BAH"
            scores={[2, 1]}
            date="DOM - 08/12 18:00"
            location="Castelão"
          />
        </table>
      )}
    </>
  );
}
