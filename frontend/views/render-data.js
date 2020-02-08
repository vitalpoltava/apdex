import { rootElementId, events } from '../constants';
import Card from './card';
import Popup from './popup';
import ListTrigger from "./trigger";

/**
 * @description
 * This class renders data presentation layout
 */
class RenderData {
  constructor(store, bus) {
    this.isListView = false;
    this.rootEl = document.querySelector(`#${rootElementId}`);
    this.store = store;
    this.bus = bus;
    this._addEvents();

    // Init popups for apps
    new Popup();

    // Init layout toggling
    new ListTrigger(this.bus);
  }

  _renderView(isCardView = false) {
    let template = '';

    for (let host of this.store.hosts) {
      const appsList = this.store.getTopAppsByHost(host, 5);
      if (appsList && appsList.length) {
        const card = new Card([host, appsList], isCardView);
        template += card.template;
      } else {
        const { removeHost } = events;
        // Signal to remove the host with no apps attached
        this.bus.publish(removeHost, host);
      }
    }

    this.rootEl.innerHTML = template;
  }

  _reRender() {
    this.isListView ? this._renderView(false) : this._renderView(true);
  }

  _addEvents() {
    const { list, card, appAdded, appRemoved } = events;
    this.bus.subscribe(list, this.renderListView.bind(this));
    this.bus.subscribe(card, this.renderCardView.bind(this));
    this.bus.subscribe(appAdded, this._reRender.bind(this));
    this.bus.subscribe(appRemoved, this._reRender.bind(this));
  }

  renderCardView() {
    this.isListView = false;
    this._renderView(true);
  }

  renderListView() {
    this.isListView = true;
    this._renderView(false);
  }
}

export default RenderData;