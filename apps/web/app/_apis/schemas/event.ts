import { z } from 'zod'

export const EventSchema = z.object({
  eventId: z.string(),
  prize: z.object({
    description: z.string(),
    imageUrl: z.string(),
  }),
  totalWinnersCount: z.number(),
  participantsCount: z.number(),
  usedTicketsCount: z.number(),
  remainingTicketsCount: z.number(),
  eventEndDate: z.string(),
})

export const EventResultSchema = z.object({
  eventId: z.string(),
  isWinner: z.boolean(),
  participantsCount: z.number(),
  usedTicketsCount: z.number(),
})

export type Event = z.infer<typeof EventSchema>
export type EventResult = z.infer<typeof EventResultSchema>
