// const objOne = [ { name: 'sakib', age: 22, dob: '12/31/1999' } ]
// console.log( objOne[ 0 ].dob )

// const objTwo = {
//     name: 'sakib',
//     people: [
//         { age: 22, name: 'jhon cena', job: 'wrestler' },
//         { age: 23, name: 'dean ambrose', job: 'also wrestler' }
//     ]
// }
// console.log( objTwo.people[ 1 ].job )

// const objThree = {
//     name: 'albert einstein',
//     job: 'scientist',
//     work: {
//         place: 'sweden',
//         lab: 'the ae laboratory'
//     }
// }
// console.log( objThree.work?.lab?.name )








// const arrOne = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// const makeDouble = x => x * x
// const makedobleByMap = arrOne.map( makeDouble )
// const makeDoubleByMap = arrOne.map( x => x * 2 )
// console.log( makeDoubleByMap )

// const nameOf = [ 'walker', 'cancelo', 'stones', 'reece james', 'alexander' ].map( name => name.length )
// console.log( nameOf )
// const arryTwiceIndex = [ 2, 4, 6, 8, 20 ].map( x => x / 2 )
// console.log( arryTwiceIndex )








// const nameOf = [ 'sakib', 'xhaka', 'saliba', 'rudigar' ]
// nameOf.forEach( name => console.log( name ) )

// const objOne = [
//     { name: 'xavi', age: 43, coach: 'fcb' },
//     { name: 'guordiola', age: 50, coach: 'man city' }
// ]

// const name = objOne.map( name => name.coach )
// console.log( name )

// objOne.forEach( f => console.log( f ) )








// const filtering = [ 12, 14, 12, 21, 34, 78, 576, 34 ].filter( x => x > 20 )
// console.log( filtering )

// const objectOne = [ {
//     name: 'al khelaifi',
//     salary: 20000
// },
// {
//     name: 'al sakib',
//     salary: 30000
// },
// {
//     name: 'al sakib',
//     salary: 40000
// },
// {
//     name: 'al sakib',
//     salary: 50000
// } ]
// const varGreater = objectOne.filter( x => x.salary > 20000 )
// console.log( varGreater[ 2 ].salary )

// const filtering = [ 12, 14, 12, 21, 34, 78, 576, 34 ].find( x => x % 576 === 0 )
// console.log( filtering )
// const objectOne = [ { name: 'al khelaifi', salary: 20000 },
// { name: 'al sakib', salary: 30000 },
// { name: 'al sakib', salary: 40000 },
// { name: 'al sakib', salary: 50000 } ]

// const find = objectOne.find( x => x.salary > 30000 )
// console.log( find )

// let i = 0
// let str = 10
// do
// {
//     i = i + 1
//     str = str + i
// }
// while ( i < 4 )
// console.log( str )









// const numbers = [ 1, 2, 3, 4, 5, 6, 7 ]
// const sum = numbers.reduce( ( p, l ) => p + l, 0 )
// console.log( sum )

// const student = {
//     name: 'sakib',
//     choice: {
//         job: 100,
//         study: 80,
//         travel: 70
//     }
// }
// const choice = student.choice
// const choice = student.choice.job

// const another = student[ 'choice' ][ 'job' ]
// const also = 'study'
// const anotherone = student.choice[ also ]
// console.log( anotherone )









// class Sakib
// {
//     name;
//     age = 22;
//     constructor ( name )
//     {
//         this.name = name
//     }
//     setMyCareer ( job )
//     {
//         console.log( `you will work as a ${ job }` )
//     }
// }
// class Eakub extends Sakib
// {
//     rank
//     constructor ( name, rank )
//     {
//         super( name )
//         this.rank = rank
//     }
//     develop ( work )
//     {
//         console.log( `hello ${ work }` )
//     }
// }

// const child = new Sakib( 'Sakib' )
// child.setMyCareer( 'student' )
// child.setMyCareer( 'web developer' )
// console.log( child )

// const childOne = new Eakub( 'Eakub Ahmad', 'First Class' )
// console.log( childOne.name )
// childOne.develop( 'Engineer' )







// for in and ternary operator
// const object = { a: 1, b: 2, c: 3 };

// for ( const property in object )
// {
//     console.log( `${ property }:  ${ object[ property ] }` );
// }


// let marks = 23
// let result = ( marks >= 40 ) ? 'pass' : 'fail';

// console.log( `You ${ result } the exam.` );









// prototypical inheritance
// const parent = {
//     value: 2,
//     method ()
//     {
//         return this.value + 1;
//     }
// };

// const child = {
//     __proto__: parent,
// };
// console.log( child.value );








// practice tasks
// const convertEven = [ 1, 3, 5, 7, 9 ].map( val => val + 1 )
// console.log( convertEven )
// const convertEven = ( arr ) =>
// {
//     var arr2 = []
//     for ( const i of arr )
//     {
//         arr2.push( i + 1 )
//     }
//     return arr2
// }
// console.log( convertEven( [ 1, 2, 3, 4, 5, 6, 7 ] ) )


// const divisibleThirty = [ 12, 30, 60, 230, 210, 90, 345 ].filter( val => val % 30 == 0 )
// console.log( divisibleThirty )
// const divisibleThirty = [ 12, 30, 60, 230, 210, 90, 345 ].find( val => val % 30 == 0 )
// console.log( divisibleThirty )


// const arrSum = [ 1, 2, 3, 4, 5, 6, 7, 889 ].reduce( ( f, l ) => ( f + l ), 0 )
// console.log( arrSum )
// const arrSum = ( arr ) =>
// {
//     let sum = 0
//     for ( const i of arr )
//     {
//         sum = sum + i
//     }
//     return sum
// }
// console.log( arrSum( [ 12, 12, 12, 13 ] ) )


// const people = [
//     {
//         name: 'meena', salary: 5000
//     },
//     {
//         name: 'eena', salary: 6000
//     },
//     {
//         name: 'ena', salary: 90000
//     }
// ]
// const result = people.map( val => val.salary )
// const res = result.reduce( ( first, last ) => ( first + last ), 0 )

// console.log( res )

// const totalSalary = ( people ) =>
// {
//     let sum = 0
//     for ( const i of people )
//     {
//         sum = sum + i.salary
//     }
//     return sum
// }
// console.log( totalSalary( people ) )


// const fred = {
//     nameOfclub: 'manchester united',
//     salary: '3m per year'
// }
// console.log( fred.salary )


// const alexander = {
//     work: [
//         {
//             name: 'alexander',
//             city: 'manchester city',
//             salary: 30000,
//             demandedPosition: 'defender'
//         }
//     ]
// }
// console.log( alexander.work[ 0 ].city )


// const result = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//             lat: "-37.3159",
//             lng: "81.1496"
//         }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// }

// console.log( result.company.name )