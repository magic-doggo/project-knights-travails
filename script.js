let rows = [0, 1, 2, 3, 4, 5, 6, 7];
let columns = [0, 1, 2, 3, 4, 5, 6, 7];
let boardArray = [];
let adjancyList = new Map();

for (let row in rows) {
    for (let column in columns) {
        let cell = new Array(row, column)
        boardArray.push(String(cell)) 
    }
}

function addNode(cell) {
    adjancyList.set(cell, [])
}
for (let i = 0; i < boardArray.length; i++) {
    addNode(boardArray[i]);
}

function addEdge(origin, destination) {
     adjancyList.get(origin).push(destination);
    //  adjancyList.get(destination).push(origin)
}


console.log(adjancyList);

let destinations = function findDestinations(a,b) {
    let concatenatedArray = [];
    let possibleMoves = [[a+2, b+1], [a+1, b+2], [a-1, b+2], [a-2, b+1], [a-2, b-1], [a-1, b-2], [a+1, b-2], [a+2, b-1]];
    for (let i = possibleMoves.length - 1; i >= 0; i--) {
        if (possibleMoves[i][0] < 0 || possibleMoves[i][0] > 7 || possibleMoves[i][1] < 0 || possibleMoves[i][1] > 7) {
            possibleMoves.splice(i, 1);
        }
    }
    for (let array of possibleMoves) {
        let tempConcat = String(array);
        concatenatedArray.push(tempConcat);
    }
    return concatenatedArray;
}


for (let origin of adjancyList.keys()) {
    let currentArrayOfDestinations = destinations(parseInt(origin[0]), parseInt(origin[2]));
    // console.log(origin, "origin");
    // console.log(currentArrayOfDestinations , "currentarrayofdestinations");
    for (let i = 0; i < currentArrayOfDestinations.length; i++) {
        addEdge(origin, currentArrayOfDestinations[i]);
    }
}
console.log(adjancyList)