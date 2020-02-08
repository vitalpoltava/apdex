import { triggerElementId, triggerLabelElementId, events } from '../constants';

class ListTrigger {
  constructor(bus) {
    const {list, card} = events;
    const triggerEl = document.querySelector(`#${triggerElementId}`) || {};
    const triggerLabelEl = document.querySelector(`#${triggerLabelElementId}`) || {};
    triggerEl.addEventListener('click', evt => {
      const isListView = evt.target.checked;
      isListView ? bus.publish(list, undefined) : bus.publish(card, undefined);
      isListView ? triggerLabelEl.textContent = 'Show as an awesome grid' : triggerLabelEl.textContent = 'Show as list';
    });
  }
}

export default ListTrigger;