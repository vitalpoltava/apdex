import { getAppsUrl } from './constants';
import getApps from './service/get-data';
import AppStore from './store';
import Mediator from './service/mediator';
import RenderData from './views/render-data';
import ListTrigger from './views/trigger';

// Startup UI...
getApps(getAppsUrl)
  .then(apps => {
    const store = new AppStore(apps);
    const bus = new Mediator();

    new ListTrigger(bus);
    const renderData = new RenderData(store, bus);

    renderData.renderCardView();
  });