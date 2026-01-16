import { LinkedList } from "./linkedList";


class Queue {
    queue: LinkedList
    constructor() {
        this.queue = new LinkedList()
    }

    enqueue(value: number | string) {
        this.queue.prepend(value)
    }

    dequeue() {
        return this.queue.remove(this.queue.length - 1 )
    }


}