import { CategoryHandlers } from './categoryHandlers'
import { PlaceHandlers } from './placeHandlers'
import { LikeHandlers } from './likeHandlers'

export const handlers = [...CategoryHandlers, ...PlaceHandlers, ...LikeHandlers]
