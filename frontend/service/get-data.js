const getApps = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then((result) => {
        if (result.message) {
          throw new Error(result);
        }
        return result;
      }
    )
    .catch((error) => {
      throw new Error(error);
    });
};

export default getApps;