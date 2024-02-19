# Queue [![npm](https://img.shields.io/npm/v/@onset/queue.svg)](https://www.npmjs.com/package/@onset/queue) ![npm type definitions](https://img.shields.io/npm/types/@onset/queue.svg)

Queue for your project.

## Installation

```bash
npm install @onset/queue
```

## Usage

### Queue

```typescript
import { createQueue } from '@onset/queue'

const delay = (milliseconds: number) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))

const task1 = async () => {
	await delay(5000)
	console.log('Task 1')
}
const task2 = async () => {
	await delay(3500)
	console.log('Task 2')
}
const task3 = async () => {
	await delay(4000)
	console.log('Task 3')
}

const queue = createQueue()
queue.enqueueTask(task1)
queue.enqueueTask(task2)
queue.enqueueTask(task3)
```

#### Console output:

```js
'Task 1' // After 5 seconds
'Task 2' // After 8.5 seconds
'Task 3' // After 12.5 seconds
```

### Group helper

```typescript
import { queueGroup } from '@onset/queue'

queueGroup('apples').enqueueTask(task1)
queueGroup('apples').enqueueTask(task2)
queueGroup('pears').enqueueTask(task3)
```

#### Console output:

```js
'Task 3' // After 4 seconds
'Task 1' // After 5 seconds
'Task 2' // After 8.5 seconds
```
