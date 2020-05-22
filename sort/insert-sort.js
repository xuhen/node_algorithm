function insertSort(list) {
    const len = list.length;

    for (let i = 1; i < len; i++) {
        let temp = list[i];
        let j = i - 1;

        while (j >= 0 && list[j] > temp) {
            list[j + 1] = list[j];
            j = j - 1;
        }
        list[j + 1] = temp;
    }

    return list;
}



const arr = [7, 6, 8, 4, 2, 1];

const r = insertSort(arr);
console.log(r);