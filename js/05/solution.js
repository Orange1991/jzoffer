class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let reversePrint = node => {
  if (node) {
    if (node.next) {
      reversePrint(node.next);
    }
    console.log(node.val);
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

reversePrint(n1);

