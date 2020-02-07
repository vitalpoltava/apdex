import { rootElementId, popupElementClass, popupShowClass } from '../constants';

class Popup {
  constructor() {
    this.popupParent = document.querySelector(`#${rootElementId}`);
    this.popupParent.addEventListener('click', evt => {
      const appItemEl = evt.target.parentNode;
      this.togglePopup(appItemEl);
    });
  }

  togglePopup(el) {
    el.querySelector(`.${popupElementClass}`).classList.toggle(popupShowClass);
  }
}

export default Popup;