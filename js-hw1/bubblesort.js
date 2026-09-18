let elements;
elements = [7, -4, 2, 3, -1, 5];

function bubbleSort(elements) {
    for (let a = 0; a < elements.length - 1; a++) {
        let swapped = false;
        for (let b  = 0; b < elements.length - 1 - a; b++) {
            if (elements[b] > elements[b + 1]) {
                [elements[b], elements[b + 1]] = [elements[b + 1], elements[b]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}

bubbleSort(elements);
console.log(elements);