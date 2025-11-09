import { COLOR_VARIANTS } from '@repo/ui/consts/colorVariant'

export const CAMPUS = {
  SINGWAN: '신관',
  CHEANAN: '천안',
  YESAN: '예산',
} as const

export const CAMPUS_LOCATION = {
  SINGWAN: { latitude: 36.469483428385914, longitude: 127.14059828594706 },
  CHEANAN: { latitude: 36.85101236046876, longitude: 127.15093333537096 },
  YESAN: { latitude: 36.66990298154316, longitude: 126.85937468290652 },
} as const

export const CAMPUS_COLOR = {
  SINGWAN: COLOR_VARIANTS.red,
  CHEANAN: COLOR_VARIANTS.blue,
  YESAN: COLOR_VARIANTS.yellow,
} as const
export type CampusType = keyof typeof CAMPUS
export const CAMPUS_LIST = Object.keys(CAMPUS) as CampusType[]
