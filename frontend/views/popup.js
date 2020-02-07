import { rootElementId } from '../constants';

class Popup {
  constructor() {
    this.popupParent = document.querySelector(`#${rootElementId}`);
    this.popupParent.addEventListener('click', evt => {
      const appItemEl = evt.target.parentNode;
      this.togglePopup(appItemEl);
    });
  }

  togglePopup(el) {
    el.querySelector('.popup-text').classList.toggle('show');
  }
}

export default Popup;