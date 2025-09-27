export const COLOR_VARIANTS = {
  red: {
    text: 'text-red',
    background: 'bg-red-light',
    border: {
      default: 'border-red-light',
      active: 'border-red',
    },
  },
  blue: {
    text: 'text-blue',
    background: 'bg-blue-light',
    border: {
      default: 'border-blue-light',
      active: 'border-blue',
    },
  },
  yellow: {
    text: 'text-yellow',
    background: 'bg-yellow-light',
    border: {
      default: 'border-yellow-light',
      active: 'border-yellow',
    },
  },
}

export type COLOR_VARIANTS_KEY = keyof typeof COLOR_VARIANTS
