class appStore {
  constructor (initialSet = []) {
    const [hosts, sortedList] = this.transformData(initialSet);
    this.hosts = hosts;
    this.sortedList = sortedList;
  }

  transformData(rawList) {
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
}

export default appStore;