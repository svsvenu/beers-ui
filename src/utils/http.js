import axios from "axios";

async function callHttpGet(url, headers) {
  return await axios({
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
