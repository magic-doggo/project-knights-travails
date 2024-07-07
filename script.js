rows = [0, 1, 2, 3, 4, 5, 6, 7];
columns = [0, 1, 2, 3, 4, 5, 6, 7];
let boardArray = [];
let adjancyList = new Map();

for (let row in rows) {
    for (let column in columns) {
        let cell = new Array(row, column)
        boardArray.push(String(cell)) 
        // boardArray.push(row + ',' + column);
    }
}
console.log(boardArray)

//add node
function addNode(cell) {
    adjancyList.set(cell, [])
}

// function addEdge(origin, destination) {
//      adjancyList.get(origin).push(destination);
//     //  adjancyList.get(destination).push(origin)
// }

// for (cell in boardArray) {
//     console.log(cell)
//     addNode(String(cell));
// }
for (let i = 0; i < boardArray.length; i++) {
    addNode(boardArray[i]);
}

console.log(adjancyList);

