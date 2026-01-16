import { LinkedList } from "./linkedList";


export class Stack {
    stack: LinkedList
    constructor() {
        this.stack = new LinkedList()
    }

    push(value: number | string) {
        this.stack.prepend(value)
    }

    pop() {
        return this.stack.shift()
    }
}