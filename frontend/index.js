import {getAppsUrl} from './constants';
import getApps from './service/get-data';
import appStore from './store';

// Startup UI...
getApps(getAppsUrl)
  .then(apps => {
    return new appStore(apps);
  })
  .then(store => {
    console.log(store.getTopAppsByHost('7e6272f7-098e.dakota.biz'))
  });