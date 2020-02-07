import { rootElementId } from '../constants';

class Popup {
  constructor() {
    this.popupParent = document.querySelector(`#${rootElementId}`);
    this.popupParent.addEventListener('click', evt => {
      const appItemEl = evt.target.parentNode;
      const version = appItemEl.dataset.version;
      this.showPopup(appItemEl, version);
    });
  }

  showPopup(el, version) {
    console.log(version)
  }
}

export default Popup;