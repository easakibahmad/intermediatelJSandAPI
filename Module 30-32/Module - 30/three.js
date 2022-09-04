// const { max } = require( "moment" )




// function addSums ( one, two = 9 )
// {
//     return one + two
// }
// const add = addSums( 23, 45 )
// console.log( add )

// function myName ( first, second = 'ahmad' )
// {
//     return first + ' ' + second
// }
// const fullName = myName( 'sakib' )
// console.log( fullName )






// const a = "hello"
// const b = 'hi'
// const c = `sakib`
// const d = `this is sakib
// this is me`
// console.log( d )

// const a = 20
// const b = 34
// const c = [ 1, 2, 3, 4, 5, 6 ]
// // console.log( a + ' ' + c.length + " " + b )
// const res = `${ a } ${ c.length } ${ b }`
// console.log( res )






// const functionOne = function ( one, two )
// {
//     return one + two
// }
// const funtionTwo = ( one, two ) => one + two

// console.log( funtionTwo( 12, 12 ) )






// const arrowFunc = ( one, two ) => one * two
// console.log( arrowFunc( 12, 12 ) )

// const arrowFuncTwo = ( f, l ) => f + " " + l
// console.log( arrowFuncTwo( 'Sakib', 'Ahmad' ) )

// const func = () => 3.14
// const funcOne = one => one
// console.log( func( 12 ) )

// const multiLine = () =>
// {
//     const one = 23;
//     const two = 34;
//     return one * two;
// }
// console.log( multiLine() )

// const obj = {
//     name ()
//     {
//         return 12
//     }
// }
// console.log( obj.name() )







// const arrOne = [ 1, 2, 3, 4, 5, 6, 12 ]
// console.log( Math.max( ...arrOne ) )
// const arrTwo = arrOne
// arrOne.push( 12 )
// arrTwo.push( 13 )

// const arrThree = [ 12, 34, ...arrOne, 23 ]
// console.log( arrThree )








// const objOne = {
//     name: 'sakib',
//     age: 22,
//     occupation: 'student'
// }
// const { country, hobby, ...nam } = { like: 'leo messi', hobby: 'pahar', desh: 'bd', country: 'anytime' }
// const { name } = objOne
// console.log( name )
// console.log( nam )

// const anoArray = [ 12, 13, 14, 15, 16 ]
// const [ first, second ] = anoArray
// console.log( first )

// const [ first, second ] = [ 'sakib', 'ahmad', 'eakub' ]
// console.log( `${ first } ${ second }` )

// function countTheValue ()
// {
//     return [ 'halim', 'kalim' ]
// }
// const [ one, two ] = countTheValue()
// console.log( `${ one }  ${ two }` )







// const threeNum = ( one, two, three ) => one * two * three
// // console.log( threeNum( 12, 12, 1 ) )
// const paragraph = `I am a web developer
// I love to code
// I love to eat biryani`
// // console.log( paragraph )
// const result = ( one, two = 23 ) => one + two
// // console.log( result( 23 ) )



// const evenElements = ( arr ) =>
// {
//     let arr2 = []
//     for ( const i of arr )
//     {
//         console.log( i )
//         console.log( i.length )
//         if ( ( i.length ) % 2 == 0 )
//         {
//             arr2.push( i )
//         }
//     }
//     return arr2
// }
// // console.log( evenElements( [ 'sakib', 'sani', 'nabiha', 'thaky', 'nadir', 'galib' ] ) )



// const sumAndAvg = ( arr ) =>
// {
//     var sum = 0
//     for ( const i of arr )
//     {
//         sum += ( i * i )
//     }
//     return `sum is ${ sum } and average is ${ sum / arr.length }`
// }
// // console.log( sumAndAvg( [ 1, 2, 3, 4 ] ) )


// const checkMax = ( arrOne, arrTwo ) =>
// {
//     let arrThree = [ ...arrOne, ...arrTwo ]
//     return Math.max( ...arrThree )
// }
// console.log( checkMax( [ 12, 14, 200, 15 ], [ 17, 18, 19 ] ) )