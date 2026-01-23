const SPACE_FROM_BOTTOM_SHEET = 10

export const BOTTOM_OFFSET = {
  WITH_BOTTOM_SHEET:
    Math.floor(window.innerHeight * 0.2) + SPACE_FROM_BOTTOM_SHEET,
  WITH_SUMMARY_CARD: 220,
} as const
