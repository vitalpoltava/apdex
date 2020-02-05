import { getAppsUrl } from './constants';
import getApps from './service/get-data';

// Startup UI...
getApps(getAppsUrl).then(apps => {
  console.log(apps)
});