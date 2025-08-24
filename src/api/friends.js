import { api } from "../lib/api"; 

export const getFriends = async () => {
  const res = await api.get("/friends");
  return res.data;
};

export const getFriendScraps = async ( friendUserId ) => {
  const res = await api.get(`/friend/${friendUserId}/scraps`);
  return res.data;
};