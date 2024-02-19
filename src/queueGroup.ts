import { createQueue } from './createQueue'

type Group = string | symbol | null | undefined

const queues = new Map<Group, ReturnType<typeof createQueue>>()

export const queueGroup = (group: Group) => {
	const queue = queues.get(group)
	if (queue) {
		return queue
	}
	const newQueue = createQueue()
	queues.set(group, newQueue)
	return newQueue
}
