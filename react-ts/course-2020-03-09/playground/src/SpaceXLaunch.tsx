import React, { useState, useEffect } from "react";

// AUFGABEN:
// - weitere Daten laden und anzeigen
// - Ladeindikator anzeigen

type LaunchData = {
  mission_name: string;
  launch_date_utc: string;
  mission_patch_small: string;
};

const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState<LaunchData>({
    mission_name: "",
    launch_date_utc: "",
    mission_patch_small: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const fetchLaunch = () => {
    setIsLoading(true);
    fetch(`https://api.spacexdata.com/v3/launches/${launchNr}`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setLaunchData({
          mission_name: data.mission_name,
          launch_date_utc: data.launch_date_utc,
          mission_patch_small: data.links.mission_patch_small
        });
      });
  };
  useEffect(fetchLaunch, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <img src={launchData.mission_patch_small} />
      <button onClick={() => setLaunchNr(launchNr + 1)} disabled={isLoading}>
        next
      </button>
      <div>{isLoading ? "loading..." : null}</div>
    </div>
  );
};

export default SpaceXLaunch;
