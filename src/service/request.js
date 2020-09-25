import axios from "axios";

export default function request(req) {
  return axios(req)
    .catch((e) => console.error(`Error Request with arg ${JSON.stringify(req)}`));
}