const axios = require("axios");
const {config} = require('../config')

const basePath = config.ApiBaseUrl;

class Axios {
  /**
   * @param {string} action http type e.g GET, PUT etc.
   * @param {string} url  endpoint e.g /user
   * @param {object} headers http headers such as content type or token headers
   * @param {NewType} data http body such as json or multipart objects
   */
  static async call(action, url, data, headers) {
    const options = {
      method: action,
      url: `${basePath}/${url}`,
      headers: headers,
      data: data,
    };
    return await axios.request(options);
  }
}

module.exports.Axios = Axios