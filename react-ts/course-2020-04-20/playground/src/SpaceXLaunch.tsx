import React, { useState, useEffect } from "react";

const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  const fetchLaunch = () => {
    fetch(`https://api.spacexdata.com/v3/launches/${launchNr}`)
      .then((res) => res.json())
      .then((data) => setLaunchData(data));
  };
  useEffect(fetchLaunch, [launchNr]);
  return (
    <div>
      <h1>{(launchData as any).mission_name}</h1>
      <div>date: {(launchData as any).launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>next</button>
    </div>
  );
};

export default SpaceXLaunch;
