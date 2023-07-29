import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24a90e8750d344159e7d29887f8ec3e6",
  },
});
