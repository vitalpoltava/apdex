class Card {
  constructor(data, isCard = false) {
    const [host, apps] = data;
    this.host = host;
    this.apps = apps;
    this.isCard = isCard;
  }

  get template() {
    return `
      <div class="card ${this.isCard ? 'half' : ''}">
        <div>${this.host}</div>
      </div>
    `;
  }
}

export default Card;