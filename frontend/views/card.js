class Card {
  constructor(data, isCard = false) {
    const [host, apps] = data;
    this.host = host;
    this.apps = apps;
    this.isCard = isCard;
  }

  getApps() {
    return this.apps.map(item => `
        <div class="card-host-top-apps" data-version="${item.version}">
          <div class="apdex-number">${item.apdex}</div>
          <div class="top-app-name">${item.name}</div>
        </div>
    `).join('');
  }

  get template() {
    return `
      <div class="card${this.isCard ? ' half' : ''}">
        <div class="card-host-name">${this.host}</div>
        <div class="card-host-top-apps-wrapper">${this.getApps()}</div>
      </div>
    `;
  }
}

export default Card;