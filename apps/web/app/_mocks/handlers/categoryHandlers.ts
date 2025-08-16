import { http, HttpResponse } from 'msw'
import { category } from '../data/category'
import { API_PATH } from '@/_constants/path'

export const CategoryHandlers = [
  http.get('https://example.com' + API_PATH.CATEGORY, () => {
    return HttpResponse.json(category)
  }),
]
