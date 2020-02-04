import React, { useEffect, useState } from "react";

/* 
TODO:
- mehr Daten laden
- Indikator, dass geladen wird
*/

type APIData = {
  mission_name: string;
  launch_date_utc: string;
  links?: {
    mission_patch: string;
  };
};

const SpaceXLaunch: React.FC<{}> = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [launchData, setLaunchData] = useState<APIData>({
    mission_name: "",
    launch_date_utc: ""
  });
  const fetchLaunch = () => {
    setIsLoading(true);
    fetch(`https://api.spacexdata.com/v3/launches/${launchNr}`)
      .then(res => res.json())
      .then(data => {
        setLaunchData(data);
        setIsLoading(false);
      });
  };
  useEffect(fetchLaunch, [launchNr]);
  if (isLoading) {
    return (
      <div style={{ height: 600 }}>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div style={{ height: 600 }}>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr - 1)}>prev</button>
      {launchData.links ? (
        <img src={launchData.links.mission_patch} style={{ width: "300px" }} />
      ) : null}
      <button onClick={() => setLaunchNr(launchNr + 1)}>next</button>
    </div>
  );
};

export default SpaceXLaunch;
