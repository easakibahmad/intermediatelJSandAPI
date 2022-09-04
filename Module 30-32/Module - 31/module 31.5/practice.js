// let name = 'sakib'
// const age = 22
// const web = {
//     location: 'dhaka, bangladesh',
//     developer: 'web debeloper'
// }
// const templateString = `${ name } is a ${ web.developer } and he is only ${ age } years of age. 
// He lives in ${ web.location }`
// console.log( templateString )


// const divide5 = ( num ) => num / 5
// console.log( divide5( 25 ) )


// const multiply2 = ( num1, num2 ) => ( num1 + 2 ) * ( num2 + 2 )
// console.log( multiply2( 1, 2 ) )


// const multiply3 = ( num1, num2, num3 ) => num1 * num2 * num3
// console.log( multiply3( 2, 3, 5 ) )


// const multiply2ManyLine = ( num1, num2 ) =>
// {
//     num1 = num1 + 1
//     num2 = num2 + 1
//     return num1 * num2
// }
// console.log( multiply2ManyLine( 5, 3 ) )


// const res5 = [ 2, 3, 5, 6 ].map( val => val * 5 )
// console.log( res5 )


// const resOdd = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3 ].filter( val => val % 2 != 0 )
// console.log( resOdd )


// const register = [ { name: 'sakib', salary: 6000 }, { name: 'akib', salary: 3000 }, { name: 'kib', salary: 5000 } ]
// const res5000 = register.find( val => val.salary == 5000 )
// console.log( res5000 )


// const nameFriends = {
//     first: 'sakib',
//     second: 'akib',
//     third: 'halim'
// }
// const { third } = nameFriends
// console.log( third )


// const arrOne = [ 1, 2, 3, 4, 5 ]
// const [ one, two, three ] = arrOne
// console.log( three )


// const sum = ( a, b, c = 7 ) => a + b + c
// console.log( sum( 1, 2 ) )


// const nestedObj = {
//     anotherObj: {
//         lastObj: {
//             name: 'sakib',
//             age: 22,
//             hobbies: [ 'playing', 'coding', 'watching football' ]
//         }
//     }
// }
// console.log( nestedObj?.anotherObj?.lastObj?.hobbies[ 1 ] )