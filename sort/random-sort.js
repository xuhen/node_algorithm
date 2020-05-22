// 将数组随机排序

function randomSort(arr) {
    const len = arr.length;

    for (let i = len; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let t = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = t;
    }

    return arr;

}



const map = {};
for (let i = 0; i < 100000; i++) {
    let keys = randomSort([1, 2, 3]);
    keys = JSON.stringify(keys);
    if (!map[keys]) {
        map[keys] = 1;
    } else {
        map[keys]++;
    }

}

for (let key in map) {
    map[key] = (map[key] / 100000 * 100) + '%';
}

console.log(map);