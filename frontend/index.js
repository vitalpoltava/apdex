import { getAppsUrl } from './constants';
import getApps from './service/get-data';
import AppStore from './store';
import Mediator from './service/mediator';

// Startup UI...
getApps(getAppsUrl)
  .then(apps => {
    return new AppStore(apps);
  })
  .then(store => {
    const bus = new Mediator();
  });