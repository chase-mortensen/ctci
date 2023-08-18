/*
INTERSECTION:

Given two (singly) linked lists, determine if the two lists intersect.
Return the intersecting node. Note that the intersection is defined
based on reference, not value. That is, if the kth node of the first
linked list is the exact same node (by reference) as the jth node of
the second linked list, then they are intersecting.
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

  push (node) {
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

  intersects (ll) {
    // basically nested for loops
    if (ll.head && this.head) {
      let nodeA = ll.head
      let nodeB = this.head
      while (nodeA && nodeB) {
        while (nodeB) {
          console.log(`checking if nodeA(${nodeA.data}) === nodeB(${nodeB.data})`)
          if (nodeA === nodeB) {
            return nodeB
          }
          nodeB = nodeB.next
        }
        nodeB = this.head
        nodeA = nodeA.next
      }
      console.log('lists do not intersect')
      return false
    }
  }
}

const nn = (data) => {
  return new Node(data)
}

let ll_0 = new LinkedList(nn('r'))
ll_0.push(nn('a'))
ll_0.push(nn('c'))
ll_0.push(nn('e'))
ll_0.push(nn('c'))
ll_0.push(nn('a'))
ll_0.push(nn('r'))

let ll_1 = new LinkedList(nn('r'))
ll_1.push(nn('a'))
ll_1.push(nn('c'))
ll_1.push(nn('e'))
ll_1.push(nn('c'))
ll_1.push(nn('a'))
ll_1.push(nn('r'))

console.log(ll_0.intersects(ll_1))


let sharedNode = nn('e')
let ll_2 = new LinkedList(nn('c'))
ll_2.push(nn('a'))
ll_2.push(nn('s'))
ll_2.push(sharedNode)

let ll_3 = new LinkedList(nn('c'))
ll_3.push(nn('a'))
ll_3.push(nn('s'))
ll_3.push(sharedNode)

console.log(ll_2.intersects(ll_3))