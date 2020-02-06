import { rootElementId, events } from '../constants';
import Card from './card';

class RenderData {
  constructor(store, bus) {
    this.rootEl = document.querySelector(`#${rootElementId}`);
    this.store = store;
    this.bus = bus;
    this._addEvents();
  }

  _app(compiledTemplate = 'None yet loaded...') {
    this.rootEl.innerHTML = compiledTemplate;
  }

  _renderView(isCardView = false) {
    let template = '';

    for (let host of this.store.hosts) {
      const card = new Card([host, this.store.getTopAppsByHost(host, 5)], isCardView);
      template += card.template;
    }

    this._app(template);
  }

  _addEvents() {
    const [listEvent, cardEvent] = events;
    this.bus.subscribe(listEvent, this.renderListView.bind(this));
    this.bus.subscribe(cardEvent, this.renderCardView.bind(this));
  }

  renderCardView() {
    this._renderView(true);
  }

  renderListView() {
    this._renderView(false);
  }
}

export default RenderData;