//  散列
function hashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    // this.get = get;
    this.betterHash = betterHash
}

// 计算散列值, 将字符串的每个字母的ascii码值相加除以数组长度的余数
function simpleHash(data) {
    var total = 0;
    for(var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i)
    }
    return total % this.table.length;
}

function put(data) {
    // var pos = this.simpleHash(data)
    var pos = this.betterHash(data)
    console.log(data)
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for(var i =0; i < this.table.length; i++) {
        if(this.table[i] != undefined) {
            console.log(`${i} : ${this.table[i]}`)
        }
    }
}
// 霍纳算法更好的散列函数
function betterHash(string) {
    const H = 31;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    console.log(total)
    total = total % this.table.length;
    console.log(total)
    if (total < 0) {
        total += this.table.length-1;
    }
    return parseInt(total);
}

var hTable = new hashTable();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for(let i in someNames){
    hTable.put(someNames[i])
}

hTable.showDistro();

