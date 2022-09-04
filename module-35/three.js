// part 1
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
// keys
const keys = Object.keys( bottle )
// console.log( keys )

// values
const values = Object.values( bottle )
// console.log( values )

// pair
const pair = Object.entries( bottle )
// console.log( pair )
const twoDimensionalArray = [
    [ 'color', 'yellow' ],
    [ 'price', 50 ],
    [ 'isCleaned', true ],
    [ 'capacity', 1 ]
]





// part 2
// delete any properties
// delete bottle.capacity
// console.log( bottle )





// part 3
// seal means can't delete any properties or add any properties but updating any properties is available
// Object.seal( bottle )
// bottle.capacity = 2
// bottle.height = 12
// delete bottle.capacity
// console.log( bottle )






// part 4
// freeze means can't delete any properties or add any properties or updating any properties isnot available
// Object.freeze( bottle )
// bottle.capacity = 2
// bottle.height = 12
// delete bottle.capacity
// console.log( bottle )