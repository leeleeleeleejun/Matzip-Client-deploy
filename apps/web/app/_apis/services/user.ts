import axiosInstance from '@/_lib/axiosInstance'
import { API_PATH } from '@/_constants/path'
import { User, UserSchema } from '@/_apis/schemas/user'

export const getUserData = async (): Promise<User> => {
  const { data } = await axiosInstance.get(API_PATH.USER)
  return UserSchema.parse(data)
}
