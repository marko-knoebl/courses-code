import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.spacex.land/graphql/"
});

const client = new ApolloClient({
  cache,
  link
});

// via a tagged template string
const LAUNCHES_QUERY = gql`
  query recentLaunches {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`;

client.query({ query: LAUNCHES_QUERY }).then(result => console.log(result));

export default client;
