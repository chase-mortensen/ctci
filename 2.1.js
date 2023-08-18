/*
2.1 REMOVE DUPS

Write code to remove duplicates from an unsorted linked list

FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head
    this.tail = head
  }

  push(node) {
    if (this.head) {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      current.next.prev = current

    }
    else {
      this.head = node
      this.tail = node
    }
  }

  print() {
    if (this.head) {
      let current = this.head
      while (current) {
        console.log(`${current?.prev?.data} <- ${current?.data} -> ${current?.next?.data}`)
        current = current.next
      }
    }
    else {
      console.log('Empty List')
    }
  }

  remove(node) {
    if (node.prev)
      node.prev.next = node.next
    if (node.next)
      node.next.prev = node.prev
  }

  removeDups() {
    let buffer = new Set()
    let current = this.head

    while (current) {
      if (buffer.has(current.data)) {
        this.remove(current)
      }
      buffer.add(current.data)
      current = current.next
    }
  }

  removeDupsAlt() {
    if (this.head) {
      let current = this.head
      let runner = this.head.next
      while (current && runner) {
        if (current.data === runner.data) {
          this.remove(runner)
        }
        runner = runner.next
        if (!runner) {
          current = current.next
          runner = current.next
        }
      }
    }
  }
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(1)
const n6 = new Node(2)
const ll = new LinkedList(n1)
ll.push(n2)
ll.push(n3)
ll.push(n5)
ll.push(n4)
ll.push(n6)
ll.print()
console.log(' ')

ll.removeDupsAlt()
ll.print()