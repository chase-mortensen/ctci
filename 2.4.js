/*
PARTITION

Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing in the example below indicates the partition.)

EXAMPLE
Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
Partition: 5
Result: 3 -> 1 -> 2      ->      10 -> 5 -> 5 -> 8
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
        console.log(`${current.data} -> ${current?.next?.data ?? 'X'}`)
        current = current.next
      }
    } else {
      console.log('empty list')
    }
  }

  partition(n) {
    // divide the list into two sublists (left and right)
    // then append right onto the end of left
    const newList = new LinkedList()

    let current = this.head
    while (current) {
      if (current.data < n) {
        newList.push(new Node(current.data))
        console.log(`Adding ${current.data} to list`)
      }
      current = current.next
    }

    current = this.head
    while (current) {
      if (current.data >= n) {
        newList.push(new Node(current.data))
        console.log(`Adding ${current.data} to list`)
      }
      current = current.next
    }
    this.head = newList.head
    return
  }
}

const n1 = new Node(6)
const n2 = new Node(5)
const n3 = new Node(4)
const n4 = new Node(3)
const n5 = new Node(2)
const n6 = new Node(1)
const ll = new LinkedList(n1)

ll.push(n2)
ll.push(n3)
ll.push(n4)
ll.push(n5)
ll.push(n6)
ll.print()
ll.partition(3)
ll.print()
