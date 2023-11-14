import { create } from "apisauce";

const live = "http://139.59.11.217:3000/";
const local = "https://jsonplaceholder.typicode.com/";

export const env = local;

const NetworkAPI = {
  apiClient: create({
    baseURL: env,
    headers: {
      Accept: "x-www-form-urlencoded",
    },
  }),

  apiLoginClient: create({
    baseURL: env,
    headers: { Accept: "x-www-form-urlencoded" },
  }),
};

/**
 *
 * cd ~/Library/Android/sdk/emulator
 * ./emulator -list-avds
 * ./emulator -avd {AVD_NAME}
 */
export default NetworkAPI;
