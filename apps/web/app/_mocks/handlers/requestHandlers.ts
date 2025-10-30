import { http, HttpResponse } from 'msw'
import { API_PATH } from '@/_constants/path'
import { requestDetail, requests } from '../data/request'
import { addBaseUrl } from './addBaseUrl'

export const RequestHandlers = [
  http.get(addBaseUrl(API_PATH.REQUEST.LIST), () => {
    return HttpResponse.json(requests)
  }),
  http.get(addBaseUrl(API_PATH.REQUEST.DETAIL('1')), () => {
    return HttpResponse.json(requestDetail)
  }),
]
