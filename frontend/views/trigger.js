import { triggerElementId, events } from '../constants';

class ListTrigger {
  constructor(bus) {
    const [listEvent, cardEvent] = events;
    const triggerEl = document.querySelector(`#${triggerElementId}`);
    triggerEl.addEventListener('click', (e) => {
      const isListView = e.target.checked;
      isListView ? bus.publish(listEvent, []) : bus.publish(cardEvent, []);
    });
  }
}

export default ListTrigger;