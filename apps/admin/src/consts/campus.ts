export const CAMPUS = {
  SINGWAN: '신관',
  CHEONAN: '천안',
  YESAN: '예산',
} as const

export type CampusType = keyof typeof CAMPUS
