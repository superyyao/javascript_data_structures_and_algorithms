// 设计一个基于对象的链表
// Node类表示节点
// LinkedList类提供插入、删除、显示列表元素的func，以及其他
// 一些辅助方法

// 循环链表
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.head.next = this.head
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while(!(currNode.next == null) && !(currNode.next.element) == 'head') {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function findPrevious(item) {
    var currNode = this.head;
    while((!(currNode.next == null)) && ((currNode.next.element) != item)) {
        currNode = currNode.next
    }
    return currNode;
}
function remove(item) {
    var prevNode = this.findPrevious(item)
    if(!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next
    }
}

var cities = new LList();
cities.insert('Conway','head')
cities.insert('Alma','Conway')
cities.insert('test','Alma')
cities.display()

cities.remove('Conway')
cities.display()