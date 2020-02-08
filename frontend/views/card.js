/**
 * @description
 * This class simply generates cards templates
 * based on data provided. `isCardHalfWidth` param tells
 * which type of card to provide -- full width
 * or half one.
 */
class Card {
  constructor(data, isCardHalfWidth = false) {
    const [host, apps] = data;
    this.host = host;
    this.apps = apps;
    this.isCardHalfWidth = isCardHalfWidth;
  }

  getApps() {
    return this.apps.map(item => `
      <div class="card-host-top-apps">
        <div class="apdex-number">${item.apdex}</div>
        <div class="top-app-name popup">
          <span>${item.name}</span>
          <span class="popup-text">Version: ${item.version}</span>
        </div>
      </div>
    `).join('');
  }

  get template() {
    return `
      <div class="card${this.isCardHalfWidth ? ' half' : ''}">
        <div class="card-host-name">${this.host}</div>
        <div class="card-host-top-apps-wrapper">${this.getApps()}</div>
      </div>
    `;
  }
}

export default Card;