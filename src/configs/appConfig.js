import Constants from "expo-constants";

const serverConfig = {
  serverUrl: Constants.expoConfig.extra.serverUrl,
  graphqlUrl: Constants.expoConfig.extra.graphqlUrl,
};

export default serverConfig;
