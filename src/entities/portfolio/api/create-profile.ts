import api from ".";
import { UserProfileType, UserProfileResType, UserApiResType } from "../types/api-types/UserType";

export const createProfile = async (userData: UserProfileType) => {
  try {
    const response = await api.post(`users`, {
      json: userData,
    });

    const result: UserApiResType<UserProfileResType> = await response.json();

    if (result.success) return result.data;
    else return result.error;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const modifyProfile = async (userData: UserProfileType) => {
  try {
    const response = await api.put(`users`, {
      json: userData,
    });

    const result: UserApiResType<UserProfileResType> = await response.json();

    if (result.success) return result.data;
    else return result.error;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
