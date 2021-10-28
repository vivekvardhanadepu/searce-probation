import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvVars = {
  apiUrl: DEV_BACKEND_URL,
};

const prodEnvVars = {
  apiUrl: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvVars : prodEnvVars;
