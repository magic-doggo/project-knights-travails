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


function addNode(cell) {
    adjancyList.set(cell, [])
}

function addEdge(origin, destination) {
     adjancyList.get(origin).push(destination);
    //  adjancyList.get(destination).push(origin)
}


for (let i = 0; i < boardArray.length; i++) {
    addNode(boardArray[i]);
}

console.log(adjancyList);
// let destination = function findDestinations(origin) {
//     let arrayOfDestinations = [];
//     //rows
//     if (origin.charAt(0) == 0) {
//         let possibleRowDestinations = [1, 2];
//     } else if (origin.charAt(0) == 7) {
//         let possibleRowDestinations = [5, 6];
//     } else {

//     }
    
// }

// let a, comma, b;
// for (let origin of adjancyList.keys()) {
//     // console.log(origin)
//     // addEdge(origin, destination(origin))
//     // console.log(origin.charAt())

// }

// for (adjancyList.get(0,0)){

// }

addEdge('0,0','1,3')
// console.log(adjancyList.get('0,0'));


function findDestinations(a,b) {
    let concatenated = '';
    let possibleMoves = [[a+2, b+1], [a+1, b+2], [a-1, b+2], [a-2, b+1], [a-2, b-1], [a-1, b-2], [a+1, b-2], [a+2, b-1]];
    // for (let move in possibleMoves) {
    //     if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
            
    //     }
    // }
    // console.log(possibleMoves[0][0], possibleMoves[0][1]);

    console.log(possibleMoves);
    for (let i = possibleMoves.length - 1; i >= 0; i--) {
        console.log(possibleMoves[i][0], possibleMoves[i][1]);
        if (possibleMoves[i][0] < 0 || possibleMoves[i][0] > 7 || possibleMoves[i][1] < 0 || possibleMoves[i][1] > 7) {
            possibleMoves.splice(i, 1);
        }
    }
    console.log(possibleMoves);
    // concatenated = concatenated.concat(a, ',', b);
    // console.log(adjancyList.get(concatenated));
    
    // if (a == 0 && b == 0) { //aa == 0 && b == 0
    //     possibleMoves = [[a+1, b+2], [a+2, b+1]];
    // } 
    //a == 0 && b == 0 (a = row nr ; b = column nr)
    //a == 0 && b == 1
    //a == 0 && b > 1 && b < 7
    //a == 0 && b == 7
    //a == 0 && b == 8

    //a == 1 && b == 0
    //a == 1 && b == 1
    //a == 1 && b > 1 && b < 7
    //a == 1 && b == 7
    //a == 1 && b == 8

    //5 else ifs with a > 1 && a < 7
    //5 else ifs with a == 7
    //5 else ifs with a == 8
}
findDestinations(0,0);

