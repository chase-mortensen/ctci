/*
2.2 RETURN KTH TO LAST

Implement an algorithm to find the kth 
to last element of a singly linked list
*/

class Node {
  constructor(data=null) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(node=null) {
    this.head = node
    this.next = null
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
        console.log(`${current?.data} -> ${current?.next?.data}`)
        current = current.next
      }
    }
  }

  listLength() {
    let count = 0
    if (this.head) {
      let current = this.head
      count++

      while(current.next) {
        current = current.next
        count++
      }
      return count
    }
    return 0
  }

  kthToLast(k) {
    const listLen = this.listLength()
    const index = listLen - k
    if (index < listLen && index >= 0) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current.data
    }
    return 'Not a valid k'
  }
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)
const ll = new LinkedList(n1)
ll.push(n2)
ll.push(n3)
ll.push(n4)
ll.push(n5)
ll.push(n6)
ll.print()
console.log(ll.listLength())
console.log(ll.kthToLast(1))
console.log(ll.kthToLast(6))
console.log(ll.kthToLast(3))
console.log(ll.kthToLast(0))
console.log(ll.kthToLast(7))