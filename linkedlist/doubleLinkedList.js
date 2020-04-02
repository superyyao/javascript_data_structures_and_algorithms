// 设计一个基于对象的链表
// Node类表示节点
// LinkedList类提供插入、删除、显示列表元素的func，以及其他
// 一些辅助方法


// 双向链表设计
function Node(element) {
    this.element = element;
    this.next = null;
    //添加 previous属性 指向前一个
    this.previous = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
    this.findLast = findLast;
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
    newNode.previous = current;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element)
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

// 双向链表的remove方式
function remove(item) {
    var currNode = this.find(item)
    if(!(currNode.next == null)) {
        current.previous.next = currNode.next;
        currNode.next.previous = current.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

// util类 用于查找最后一个节点
function findLast() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}
// 反序显示双向链表元素
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();

    while(!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

var cities = new LList();
cities.insert('Conway','head')
cities.insert('Alma','Conway')
cities.insert('test','Alma')
cities.display()

// cities.remove('Conway')
cities.dispReverse()