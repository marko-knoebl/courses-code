import React from "react";

import gql from "graphql-tag";
import { useQuery } from "react-apollo";

const LAUNCHES_QUERY = gql`
  query recentLaunches {
    launchesPast(limit: 10) {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;

const SpaceX = () => {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Launches</h1>
      {data.launchesPast.map(launch => (
        <div>
          <strong>{launch.mission_name}</strong>: {launch.rocket.rocket_name}
        </div>
      ))}
    </div>
  );
};

export default SpaceX;
