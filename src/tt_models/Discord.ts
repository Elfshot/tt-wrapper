import { Interaction } from 'discord.js';

export interface interactionCompletedPayload {
  name: string,
  author: Interaction['user'],
  guild?: Interaction['guild'],
  target?: string|number,
}