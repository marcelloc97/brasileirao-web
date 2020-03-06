import React, { useState } from "react";

import replaceSpecialCharsUrl from "../utils/replaceSpecialCharsUrl";

export default function TableContent({
  pos,
  team,
  adversary,
  points,
  games,
  victories,
  draws,
  loses,
  goals_for,
  goals_against,
  goals_balance,
  utilization,
  type,
  classification,
  scores = [],
  date,
  location
}) {
  const [team_url, setTeamUrl] = useState("");

  function handleUrlReplace() {
    setTeamUrl(replaceSpecialCharsUrl(team.toLowerCase()));
  }

  return (
    <>
      {type === "points" && (
        <tr>
          <td>{pos}</td>
          <td className="left">
            <a
              onClick={handleUrlReplace}
              href={`https://www.gazetaesportiva.com/times/${team_url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {team}
            </a>
            {classification === "libertadores" && (
              <i className="material-icons cl-up-green">arrow_drop_up</i>
            )}
            {classification === "copa-sa" && (
              <i className="material-icons cl-right-yellow">arrow_drop_right</i>
            )}
            {classification === "rebaixamento" && (
              <i className="material-icons cl-up-green">arrow_drop_down</i>
            )}
          </td>
          <td>{points}</td>
          <td>{games}</td>
          <td>{victories}</td>
          <td>{draws}</td>
          <td>{loses}</td>
          <td>{goals_for}</td>
          <td>{goals_against}</td>
          <td>{goals_balance}</td>
          <td>{utilization}</td>
        </tr>
      )}

      {type === "scores" && (
        <tr>
          <td>
            <b>
              {date.toUpperCase()} <b>.</b> {location.toUpperCase()}
            </b>
            <span>
              {team.toUpperCase()}{" "}
              <b className="score-number-left">{scores[0]}</b> x{" "}
              <b className="score-number-right">{scores[1]}</b>{" "}
              {adversary.toUpperCase()}
            </span>
          </td>
        </tr>
      )}
    </>
  );
}
