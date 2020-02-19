import React, { useState, useEffect } from "react";

type LaunchData = {
  mission_name: string;
  launch_date_utc: string;
};

const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState<LaunchData>({
    launch_date_utc: "",
    mission_name: ""
  });
  const [loading, setLoading] = useState(false);
  const fetchLaunch = () => {
    setLoading(true);
    fetch(`https://api.spacexdata.com/v3/launches/${launchNr}`)
      .then(res => res.json())
      .then(data => {
        setLaunchData(data);
        setLoading(false);
      });
  };
  useEffect(fetchLaunch, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button disabled={loading} onClick={() => setLaunchNr(launchNr + 1)}>next</button>
      {loading ? <div>Loading...</div> : null}
    </div>
  );
};

const MemoizedSpaceXLaunch = React.memo(SpaceXLaunch);

export default MemoizedSpaceXLaunch;
