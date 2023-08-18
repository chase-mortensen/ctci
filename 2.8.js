/**
 * LOOP DETECTION
 *
 * Given a linked list which might contain a loop, implement an
 * algorithm that returns the node at the beginning of the loop
 * (if one exists)
 */

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor (head=null) {
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

  detectLoop () {
    if (this.head && this.head.next) {
      let slowIndex = this.head
      let fastIndex = this.head.next
      while (fastIndex?.next?.next) {
        if (fastIndex === slowIndex) {
          // loop detected - now find start of loop

          console.log('loop detected! ' + slowIndex.data + ' ' + slowIndex.next?.data)
          slowIndex = this.head
          while (slowIndex !== fastIndex) {
            // console.log(slowIndex.data + '->' + slowIndex.next?.data + ' ' + fastIndex.data + '->' + fastIndex.next?.data)
            slowIndex = slowIndex.next
            fastIndex = fastIndex.next
          }
          // console.log(`slowIndex(${slowIndex.data}) === fastIndex(${fastIndex.data})`)
          return slowIndex
        }
        slowIndex = slowIndex.next
        fastIndex = fastIndex.next.next
      }
    } else {
      console.log('list length less than 2')
    }
    console.log('no loop detected')
    return false
  }
}

const nn = (data) => new Node(data)

let sharedNode = nn('e')
let ll = new LinkedList(nn('c'))
ll.push(nn('a'))
ll.push(nn('s'))
ll.push(sharedNode)
ll.push(nn('a'))
ll.push(nn('s'))

ll.detectLoop()

ll.push(sharedNode)
ll.detectLoop() // error - infinite loop
