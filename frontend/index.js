import {getAppsUrl} from './constants';
import getApps from './service/get-data';
import appStore from './store';
import Mediator from './service/mediator';

// Startup UI...
getApps(getAppsUrl)
  .then(apps => {
    return new appStore(apps);
  })
  .then(store => {
    const bus = new Mediator();
  });