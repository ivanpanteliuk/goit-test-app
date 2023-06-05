import axios from "axios";

axios.defaults.baseURL = "https://6464ad0d043c103502bfbfb2.mockapi.io";

export const fetchTweets = async (page) => {
  const response = await axios.get(`/users?page=${page}&limit=3`);
  return response;
};
