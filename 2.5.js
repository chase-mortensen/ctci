/*
SUM LISTS:

You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to cheat and just convert the linked list to an integer)

EXAMPLE
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 592.
Output: (2 -> 1 -> 9). That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is 617 + 592.
Output: (9 -> 1 -> 2). That is, 912.
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

  prepend(node) {
    node.next = this.head
    this.head = node
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
}

const addReverse = (list_1, list_2) => { // 1's place at list head
  let current_1 = list_1.head
  let current_2 = list_2.head

  const result = new LinkedList()
  let carryover = 0
  let sum = 0

  while ((current_1 && current_2) || carryover > 0) {
    sum = Number(current_1?.data ?? 0) + Number(current_2?.data ?? 0) + carryover
    if (sum > 9) {
      sum -= 10
      carryover = 1
    } else {
      carryover = 0
    }
    result.push(nn(sum))
    current_1 = current_1?.next
    current_2 = current_2?.next
  }

  return result
}

const addForward = (list_1, list_2) => { // 1's place at end of list
  // ideas... maybe use a stack and once all the nodes from a list
  // have been pushed onto the stack I can pop off the values and
  // add the sum to the result list
  let current_1 = list_1.head
  let current_2 = list_2.head
  let arr_1 = [], arr_2 = []

  while (current_1 && current_2) {
    arr_1.push(current_1.data)
    arr_2.push(current_2.data)

    current_1 = current_1.next
    current_2 = current_2.next
  }

  let curVal_1 = arr_1.pop(), curVal_2 = arr_2.pop()
  const result = new LinkedList()
  let carryover = 0
  let sum = 0

  while (curVal_1 || curVal_2 || carryover > 0) {
    sum = (curVal_1 ?? 0) + (curVal_2 ?? 0) + carryover
    if (sum > 9) {
      sum -= 10
      carryover = 1
    } else {
      carryover = 0
    }
    result.prepend(nn(sum))
    curVal_1 = arr_1.pop()
    curVal_2 = arr_2.pop()
  }
  return result
}

const nn = (data) => {
  return new Node(data)
}

const ll_1 = new LinkedList(nn(7))
ll_1.push(nn(1))
ll_1.push(nn(6))

const ll_2 = new LinkedList(nn(5))
ll_2.push(nn(9))
ll_2.push(nn(2))

const result_1 = addReverse(ll_1, ll_2)
// result_1.print()

const ll_3 = new LinkedList(nn(6))
ll_3.push(nn(1))
ll_3.push(nn(7))

const ll_4 = new LinkedList(nn(2))
ll_4.push(nn(9))
ll_4.push(nn(5))

const result_2 = addForward(ll_3, ll_4)
result_2.print()