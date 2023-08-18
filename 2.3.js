/*
DELETE MIDDLE NODE

Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

EXAMPLE
Input: the node c from the linked list a->b->c->d->e->f
Result: a->b->d->e->f
*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head
  }

  push(node) {
    if (this.head) {
      let current = this.head 
        while (current.next) {
          current = current.next
        }
        current.next = node
      
    } else {
      this.head = node
    }
  }

  print() {
    if (this.head) {
      let current = this.head 
        while (current) {
          console.log(`${current.data}->${current?.next?.data}`)
          current = current.next
        }
    } else {
      console.log('list is empty')
    }
  }

  getLength() {
    if (this.head) {
      let count = 0
      let current = this.head 
        while (current) {
          count++
          current = current.next
        }
      return count
    } else {
      return 0
    }
  }

  deleteMiddleNode() {
    // deletes a node between the first and last nodes
    // if length is less than 3, no nodes are deleted
    let listLen = this.getLength()
    if (listLen > 2) {
      let deleteNode = this.head.next
      this.head.next = deleteNode.next
    }
  }
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)
const ll = new LinkedList(n1)
ll.deleteMiddleNode()

ll.push(n2)
ll.push(n3)
ll.push(n4)
ll.push(n5)
ll.push(n6)
ll.print()

while (ll.getLength() > 2) {
  ll.deleteMiddleNode()
  console.log('')
  ll.print()  
}

