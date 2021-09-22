import axios from "axios";
import * as Config from '../constants/ApiConfig';

export default function api(endPoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endPoint}`,
        data: body
      }).catch((error) => {
        console.log(error);
      });
}