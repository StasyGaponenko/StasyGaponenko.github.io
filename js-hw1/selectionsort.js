let elements;
elements = [7, -4, 2, 3, -1, 5];

function selectionSort(elements) {
    for (let a = 0; a < elements.length; a++) {
        let minIndex = a;
        for (let b  = a + 1; b < elements.length; b++) {
            if (elements[b] < elements[minIndex]) {
                minIndex = b;
            }
        }
        [elements[minIndex], elements[a]] = [elements[a], elements[minIndex]];
    }
}

selectionSort(elements);
console.log(elements);