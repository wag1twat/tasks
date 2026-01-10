class DoublyLinkedListNode {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedListList {
  head = null;
  tail = null;
  count = 0;
  constructor() {}

  add(value) {
    const node = new DoublyLinkedListNode(value);

    if (this.head === null) this.head = node;
    
    else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.count++;
  }
}

const doublyLinkedListList = new DoublyLinkedListList();
doublyLinkedListList.add(1);
doublyLinkedListList.add(2);
console.log(doublyLinkedListList);
