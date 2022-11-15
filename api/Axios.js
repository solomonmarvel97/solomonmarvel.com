const axios = require("axios");
const {config} = require("../config");

const basePath = config.APIBASEURL;

class Axios {
  static async call(action, url, data, headers) {
    const options = {
      method: action,
      url: `${basePath}/${url}`,
      headers: headers,
      data: data,
    };
    try {
      return await axios.request(options);
    } catch (err) {
      throw err
    }
  }
}

module.exports.Axios = Axios;
