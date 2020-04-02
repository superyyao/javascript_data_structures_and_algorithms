function Dictionary() {
    this.datastore = new Array()
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key]
}

function remove(key) {
    delete this.datastore[key]
}

// function showAll() {
//     console.log(Object.keys(this.datastore))
//     for(var key of Object.keys(this.datastore)) {
//         console.log(`${key} -> ${this.datastore[key]}`)
//     }
// }

// 排序
function showAll() {
    for(var key of Object.keys(this.datastore).sort()) {
        console.log(`${key} -> ${this.datastore[key]}`)
    }
}

function count() {
    // let i = 0;
    // for(var key in Object.keys(this.datastore)) {
    //     i++;
    // }
    return Object.keys(this.datastore).length
}
function clear() {
    Object.keys(this.datastore).forEach(element => {
        this.remove(element)
    });
}
var pbook = new Dictionary();
pbook[0] = 1;
pbook.add('Mike', '123');
pbook.add('david', '456')
pbook.add('cynthid','123456')
console.log(`david value = ${pbook.find('david')}`)

pbook.showAll()
pbook.remove('Mike')
pbook.showAll()
console.log(`pbook length = ${pbook.count()}`)
pbook.clear()
pbook.showAll()