import { instanceForUsers } from './api';

export const getAllUsers = async () => {
  const { data } = await instanceForUsers('users');
  return data;
};

export const getUserDetails = async id => {
  const { data } = instanceForUsers(`users/${id}`);
  return data;
};

export const getUsersBySearch = async query => {
  const { data } = await instanceForUsers(`users?name=${query}`);
  return data;
};
