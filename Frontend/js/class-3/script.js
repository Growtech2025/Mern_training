const size = 5;
let square = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
            square += "* ";
        } else {
            square += "  ";
        }
    }
    square += "\n";
}

console.log(square);


const z = 5;
let triangle = "";

for (let i = 0; i < z; i++) {
    for (let j = 0; j <= i; j++) {

        if (j == 0 || j == i || i == z - 1) {
            triangle += "* ";
        } else {
            triangle += "  ";
        }
    }
    triangle += "\n";
}

console.log(triangle);