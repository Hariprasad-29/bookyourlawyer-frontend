import { Account, User } from "./../types/AppTypes";

export const getAppName = () => {
  return "Bookyourlawyer";
};

export const getToken = () => {
  return localStorage.getItem(`${getAppName()}-Token`);
};

export const getUser = (): User | null => {
  const user = localStorage.getItem(`${getAppName()}-User`);
  if (user) {
    return JSON.parse(user);
  }
};

export const getUserId = () => {
  const user = localStorage.getItem(`${getAppName()}-User`);
  if (user) {
    const userObject = JSON.parse(user);
    return userObject.id;
  } else {
    return null;
  }
};

export const saveUserAccount = (userAccount: Account) => {
  localStorage.setItem(`${getAppName()}-Token`, userAccount.token);
  localStorage.setItem(`${getAppName()}-User`, JSON.stringify(userAccount.user));
};

export const removeToken = () => {
  return localStorage.removeItem(`${getAppName()}-Token`);
};

export const removeUser = () => {
  return localStorage.removeItem(`${getAppName()}-User`);
};
