import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

const useClient = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: "https://eoljz7colzbefh5ntgm6p6kdpq.appsync-api.us-east-1.amazonaws.com/graphql",
        cache: new InMemoryCache(),
        headers: {
          "x-api-key": "da2-vkr77s27zvfzxeelgnyjpifq5e",
        },
      }),
    []
  );

  return client;
};

export default useClient;
