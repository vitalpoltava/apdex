/**
 * @description
 * Simple data fetcher helper
 *
 * @param url
 * @returns {Promise<any | never>}
 */
const getApps = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then((result) => {
        if (result.message) {
          throw new Error(result.message);
        }
        return result;
      }
    )
    .catch((error) => {
      throw new Error(error);
    });
};

export default getApps;