class appStore {
  constructor (initialSet = []) {
    const [hosts, sortedList] = this.transformData(initialSet);
    this.hosts = hosts;
    this.sortedList = sortedList;
  }

  // Complexity: O(n)
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

  // Complexity: O(log(n))
  getTopAppsByHost(hostId = '', sliceSize = 25) {
    const resultList = [];

    if (!hostId) {
      return resultList;
    }

    for (let i = 0; i < this.sortedList.length; i++) {
      if (this.sortedList[i].host.indexOf(hostId) !== -1) {
        resultList[resultList.length] = this.sortedList[i];
      }

      if (resultList.length === sliceSize) {
        break;
      }
    }

    return resultList;
  }
}

export default appStore;