function Queue() {
	var dataStore = [];
	// 尾队列添加元素
	this.enqueue = enqueue;
	// 删除堆首元素
	this.dequeue = dequeue;
	// 读取队首元素
	this.front = front;
	// 读取队尾元素
	this.back = back
	// 显示队列中所有元素
	this.toString = toString;
	// 队列是否为空
	this.empty = empty;

	function enqueue(ele) {
		dataStore.push(ele)
	}

	function dequeue(ele) {
		return dequeue.shift()
	}

	function front() {
		return this.dataStore[0]
	}

	function back() {
		return this.dataStore[dataStore.length -1]
	}

	function toString() {
		return dataStore
	}

	function empty() {
		return this.dataStore.length === 0
	}
}


let arr = [91,46,85,15,92,35,31,22]
function distribute(nums, queues, n, digit) {
	
}