import { z } from 'zod'

export const UserSchema = z.object({
  nickname: z.string(),
  profileImageUrl: z.url(),
  profileBackgroundHexCode: z.string(),
})

export type User = z.infer<typeof UserSchema>
