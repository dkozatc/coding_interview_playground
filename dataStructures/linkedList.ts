

export class LinkedListNode {
    value: string | number | null
    next: LinkedListNode | null
    parent?: LinkedListNode | null


    constructor(value: number | string) {
        this.value = value;
        this.next = null;
        this.parent = null

    }
}

export class LinkedList {
    head: LinkedListNode | null
    tail: LinkedListNode | null
    length: number

    constructor(value?: number | string) {
        this.head = value ? new LinkedListNode(value) : null
        this.tail = this.head
        this.length = 0
    }

    append(value: number | string) {
        if(!value) return null

        const newNode = new LinkedListNode(value)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head
            this.length++
        } else {
            if(!this.tail) {
                this.tail = this.head
            } else {
                newNode.parent = this.tail
                this.tail.next = newNode
                this.tail = newNode
                this.length++
            }
        }   
        return this  
    }

    prepend(value: number | string) {
         if(!value) return null

        const newNode = new LinkedListNode(value)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
            this.length++
        }
    }

    shift() {
        if(!this.head) return null

        const topElement = this.head
        this.head = this.head.next
        this.length--
        return topElement
    }

    traverseByIndex(index: number) {
        if(!this.head) return null
        if(index === 0) return this.head
        if(!index) return -1


        let currentNode: LinkedListNode | null = this.head

        for(let count=1; count<=index; count++) {
            currentNode = currentNode ? currentNode.next : null
        }
        return currentNode
    }

    remove(index: number) {
        if(index === 0) return this.shift()

        const leader = this.traverseByIndex(index-1)

        if (leader === -1) return null
        if (leader) {
            let unwontedElement = leader.next
            leader.next = unwontedElement ? unwontedElement.next : null
            this.length--
            return unwontedElement
        }
        
    }

    printList() {
        const list = []
        let currentNode = this.head

        while(currentNode !== null) {        
            list.push(currentNode.value)
            currentNode = currentNode.next
        }

        return list.join(',')
    }
}

//Test usage
// const testList = new LinkedList()

// testList.append(1)
// testList.append(2)

// console.log(testList.traverseByIndex(1))
// console.log(testList.printList())
