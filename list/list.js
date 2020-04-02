function List() {
	// 列表元素个数
	var listSize = 0;
	// 列表当前位置
	var pos = 0;
	// 保存列表元素
	var dataStore = [];
	// 清除元素
	this.clear = clear;
	// 查找元素
	this.find = find;
	// 返回列表的字符串形式
	this.toString = toString;
	// 在现在元素后插入新元素
	this.insert = insert;
	// 列表尾部添加新元素
	this.append = append;
	// 列表中删除元素
	this.remove = remove;
	// 将列表的当前位置移动到第一个位置
	this.front = front;
	// 将列表的当前位置移动到最后一个位置
	this.end = end;
	// 将当前位置移动前一位
	this.prev = prev;
	// 将当前位置移动后一位
	this.next = next;
	// 返回列表元素个数
	this.length = length;
	// 返回列表当前位置
	this.currPos = currPos;
	// 将当前位置移动到指定位置
	this.moveTo = moveTo;
	// 返回当前元素
	this.getElement = getElement;
	// 判断是否含有该值
	this.contains = contains;

	function insert(ele, afert) {
		var insertPos = this.find(ele);
		if(insertPos > -1) {
			dataStore.splice(insertPos+1,0,ele);
			++listSize;
			return true
		}
		return false
	}
	function append(ele) {
		dataStore[listSize++] = ele
	}

	function remove(ele) {
		var foundAt = this.find(ele)
		if(foundAt > -1) {
			dataStore.splice(ele,1);
			--this.listSize;
			return true
		}
		return false
	}

	function clear() {
		dataStore = [];
		pos = 0;
		listSize = 0;
	}

	function find(ele) {
		for(var i = 0; i < listSize; i++){
			if(dataStore[i] === ele) {
				return i
			}
		}
		return -1
	}

	function front() {
		pos = 0
	}
	function end() {
		pos = listSize -1
	}
	function prev() {
		if(pos > 0) {
			--pos;
		}
	}
	function next() {
		if(pos < listSize -1) {
			++pos
		}
	}
	function length() {
		return listSize
	}
	function currPos() {
		return pos;
	}
	function moveTo(position) {
		if(position >= 0 && position <= listSize -1) {
			pos = position
		}
	}
	function getElement() {
		return dataStore[currPos]
	}

	function contains() {
		for(var i = 0; i < listSize; i++){
			if(dataStore[i] === ele) {
				return true
			}
		}
		return false
	}
	function toString() {
		return dataStore
	}

}


//显示现有清单
// function displayList(list) {
// 	for(list.front(); list.currPos() < list.length(); list.next()) {
// 		console.log(list.getElement())
// 	}
// }

function displayList(list) {
	for(list.front(); list.currPos() < list.length(); list.next()) {
		if(list.getElement() instanceof Customer){
			console.log(list.getElement().name + ", "+ list.getElement().movie)
		} else {
			console.log(list.getElement())
		}
	}
}

function Customer(name,movie) {
	this.name = name;
	this.movie = movie;
}

function checkOut(name,movie,filmList,customerList) {
	if(movieList.contains(movie)) {
		var c = new Custmoer(name,movie)
		customerList.append(c)
		filmList.remove(movie)
	} else {
		console.log(movie + ' is not available')
	}
}

var movieList = new List();
var customerList = new List()
let movies = `(1) The Shawshank Redemption（《肖申克的救赎》）
(2) The Godfather（《教父》）
(3) The Godfather: Part II（《教父2》）
(4) Pulp Fiction（《低俗小说》）
(5) The Good, the Bad and the Ugly（《黄金三镖客》）
(6) 12 Angry Men（《十二怒汉》 ）
(7) Schindler’s List（《辛德勒名单》）
(8) The Dark Knight（《黑暗骑士》）
(9) The Lord of the Rings: The Return of the King（《指环王：王者归来》）
(10) Fight Club（《搏击俱乐部》）
(11) Star Wars: Episode V - The Empire Strikes Back（《星球大战5：帝国反击战》）
(12) One Flew Over the Cuckoo’s Nest（《飞越疯人院》）
(13) The Lord of the Rings: The Fellowship of the Ring（《指环王：护戒使者》）
(14) Inception（《盗梦空间》）
(15) Goodfellas（《好家伙》）
(16) Star Wars（《星球大战》）
(17) Seven Samurai（《七武士》）
(18) The Matrix（《黑客帝国》）
(19) Forrest Gump（《阿甘正传》）
(20) City of God（《上帝之城》）`

for(let i = 0; i < movies.length; i++) {
	movieList.append(movies.trim())
}