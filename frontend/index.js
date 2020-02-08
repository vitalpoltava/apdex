import getApps from './service/get-data';
import AppStore from './store';
import Mediator from './service/mediator';
import RenderData from './views/render-data';
import { getAppsUrl } from './constants';

// Startup UI...
getApps(getAppsUrl)
  .then(apps => {
    const bus = new Mediator();
    const store = new AppStore(apps, bus);
    const renderData = new RenderData(store, bus);

    renderData.renderCardView();
  });