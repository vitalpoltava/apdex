import { events } from './constants';

class AppStore {
  constructor (initialSet = [], bus) {
    const [hosts, sortedList] = this._transformData(initialSet);
    this.hosts = hosts;
    this.sortedList = sortedList;
    this.bus = bus;
    this._addEvents();
  }

  _addEvents() {
    const { removeHost } = events;
    this.bus.subscribe(removeHost, this._removeHostFromList.bind(this));
  }

  /**
   * Complexity: O(n)
   */
  _transformData(rawList) {
    const hosts = new Set();
    let sortedList = [];

    if (rawList && rawList.length) {
      const sortByApdexPropAndPopulateHostsList = (a, b) => {
        a.host && a.host.forEach(hostName => hosts.add(hostName));
        return b.apdex - a.apdex;
      };
      sortedList = rawList.sort(sortByApdexPropAndPopulateHostsList);
    }

    return [hosts, sortedList];
  }

  _removeHostFromList(host) {
    this.hosts.delete(host);
  }

  /**
   * Complexity: O(log(n))
   */
  getTopAppsByHost(hostId = '', sliceSize = 25) {
    const resultList = [];

    if (!hostId) {
      return resultList;
    }

    for (let i = 0; i < this.sortedList.length; i++) {
      if (this.sortedList[i].host.indexOf(hostId) !== -1) {
        // This is faster then .push()
        resultList[resultList.length] = this.sortedList[i];
      }

      if (resultList.length === sliceSize) {
        break;
      }
    }

    return resultList;
  }

  /**
   * Complexity: O(log(n))
   */
  addAppToHosts(app) {
    if (!app) {
      return false;
    }

    // Adding new hosts (if any)
    app.host && app.host.forEach(hostName => this.hosts.add(hostName));

    // Inserting new app to sorted list
    for (let i = 0; i < this.sortedList.length; i++) {
      if (this.sortedList[i].apdex <= app.apdex) {
        const { appAdded } = events;
        this.sortedList.splice(i, 0, app);
        this.bus.publish(appAdded, undefined);
        break;
      }
    }

    return app;
  }

  /**
   * Complexity: O(log(n))
   */
  removeAppFromHosts(app) {
    if (!app) {
      return false;
    }

    // Removing the app from sorted list
    for (let i = 0; i < this.sortedList.length; i++) {
      if (this.sortedList[i].name === app.name) {
        const { appRemoved } = events;
        this.sortedList.splice(i, 1);
        this.bus.publish(appRemoved, undefined);
        break;
      }
    }

    return app;
  }
}

export default AppStore;