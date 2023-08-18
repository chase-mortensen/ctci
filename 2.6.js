/*
PALINDROME:

Implement a function to check if a linked list is a palindrome.
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
    this.len = head ? 1 : 0
  }

  print() {
    if (this.head) {
      let current = this.head

      while (current) {
        console.log(`${current.data} -> ${current.next?.data ?? 'X'}`)
      }
    } else {
      console.log('empty list')
    }
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
    this.len++
  }

  getElementAtIndex(index) {
    if (this.head) {
      let current = this.head
      let i = 0

      while (current) {
        if (index == i) {
          return current.data
        }
        i++
        current = current.next
      }
    } else {
      console.log('empty list')
      return null
    }
  }

  isPalindrome() {
    let frontIndex = 0
    let backIndex = this.len - 1
    let isPalindrome = true

    while (frontIndex < backIndex) {
      if (this.getElementAtIndex(frontIndex) !== this.getElementAtIndex(backIndex)) {
        console.log('not palindrome')
        return false
      }
      frontIndex++
      backIndex--
    }
    console.log('is palindrome')
    return true
  }
}

const nn = (data) => {
  return new Node(data)
}

let ll = new LinkedList(nn('r'))
ll.push(nn('a'))
ll.push(nn('c'))
ll.push(nn('e'))
ll.push(nn('c'))
ll.push(nn('a'))
ll.push(nn('r'))

ll.isPalindrome()
