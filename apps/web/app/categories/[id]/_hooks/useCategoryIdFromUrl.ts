import { usePathname } from 'next/navigation'
import { CLIENT_PATH } from '@/_constants/path'

export const useCategoryIdFromUrl = () => {
  const categoryId = usePathname().split('/')[2] || '0'
  const setCategoryId = (id: string) => {
    window.history.replaceState(null, '', CLIENT_PATH.CATEGORY_DETAIL(id))
  }

  return [categoryId, setCategoryId] as const
}
