let elements;
elements = [7, -4, 2, 3, -1, 5];

function insertionSort(elements) {
    for (let a = 1; a < elements.length; a++) {
        let b = a - 1; 
        let stored = elements[a];
        while (b >= 0 && elements[b] > stored) {
            elements[b + 1] = elements[b];
            b = b - 1;
        }
        elements[b + 1] = stored;
    }
}

insertionSort(elements);
console.log(elements);