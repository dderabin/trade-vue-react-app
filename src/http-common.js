import axios from 'axios';

export default axios.create({
  baseURL: "http://1-traderpro.eu-4.evennode.com/api/v1",
  headers: {
    "content-type": "application/json"
  }
});
