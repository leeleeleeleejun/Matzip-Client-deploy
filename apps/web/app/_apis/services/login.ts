import axiosInstance from '@/_lib/axiosInstance'
import { API_PATH } from '@/_constants/path'

// "data": {
//   "tokenType": "Bearer",
//     "accessToken": "<Access Token>",
//     "accessTokenExpiresIn": 3600000
// }

type Response = {
  tokenType: string
  assessToken: string
  accessTokenExpiresIn: string
}

export const getToken = async (): Promise<Response> => {
  const { data: response } = await axiosInstance.post(API_PATH.AUTH.TOKEN)
  console.log(response)
  const { data } = response
  return data
}
