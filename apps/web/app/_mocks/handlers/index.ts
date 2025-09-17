import { CategoryHandlers } from './categoryHandlers'
import { PlaceHandlers } from './placeHandlers'
import { EventHandlers } from './eventHandlers'

export const handlers = [
  ...CategoryHandlers,
  ...PlaceHandlers,
  ...EventHandlers,
]
