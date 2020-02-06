import { triggerElementId, triggerLabelElementId, events } from '../constants';

class ListTrigger {
  constructor(bus) {
    const [listEvent, cardEvent] = events;
    const triggerEl = document.querySelector(`#${triggerElementId}`);
    const triggerLabelEl = document.querySelector(`#${triggerLabelElementId}`);
    triggerEl.addEventListener('click', (e) => {
      const isListView = e.target.checked;
      isListView ? bus.publish(listEvent, []) : bus.publish(cardEvent, []);
      isListView ? triggerLabelEl.textContent = 'Show as an awesome grid' : triggerLabelEl.textContent = 'Show as list';
    });
  }
}

export default ListTrigger;