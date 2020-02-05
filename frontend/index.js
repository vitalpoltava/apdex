import {getAppsUrl} from './constants';
import getApps from './service/get-data';
import appStore from './store';

// Startup UI...
getApps(getAppsUrl)
  .then(apps => {
    return new appStore(apps);
  });