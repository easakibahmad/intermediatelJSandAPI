// part 1
const numbers = [ 1, 2, 3, 4, 5, 6, 7 ]
// for ( const num of numbers )
// {
//     console.log( num )
// }




// part 2
// for of can not used with objects 
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
const keys = Object.keys( bottle )
// console.log( keys )
// 3 ways to read objects properties
// object.known properties, objext['known properties'], object[unknown properties]
// for ( const key of keys )
// {
//     console.log( key, bottle[ key ] )
// }




// part 3
// for in loop
// for ( const val in bottle )
// {
//     console.log( val, bottle[ val ] )
// }





// part 4
// for ( const [ key, value ] of Object.entries( bottle ) )
// {
//     console.log( key, value )
// }