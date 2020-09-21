import axios from "axios";

function callHttpGet(url, headers) {
  return axios({
    method: "get",
    url: url,
    headers: headers,
  });
}

function callHttpPost(url, data) {
  return axios({
    method: "post",
    url: url,
    data: data,
  });
}

export { callHttpGet, callHttpPost };
