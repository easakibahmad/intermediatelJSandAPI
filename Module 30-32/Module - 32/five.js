// const user = {
//     name: 'sakib',
//     age: 22
// }
// const stringified = JSON.stringify( user )
// // console.log( user )
// // console.log( stringified )


// const object = {
//     name: 'sakib',
//     values: [ 12, 12, 13, 14, 24, 12, 56 ],
//     choices: {
//         hi: 123,
//         hlw: 1245,
//         choice_value: 'the bengali authority'
//     }
// }
// const stringChange = JSON.stringify( object )
// const stringReverse = JSON.parse( stringChange )
// console.log( typeof stringChange )









// function loadData1 ()
// {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1'
//     fetch( url )
//         .then( response => response.json() )
//         .then( json => console.log( json ) )
// }









// function loadData2 ()
// {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1'
//     fetch( url )
//         .then( response => response.json() )
//         .then( data => loadingOne( data ) )
// }
// function loadingOne ( data )
// {
//     console.log( data )
// }









// function loadData3 ()
// {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     fetch( url )
//         .then( response => response.json() )
//         .then( data => loading( data ) )
// }
// function loading ( data )
// {
//     const ul_find = document.getElementById( 'container-ul' )
//     for ( const obj of data )
//     {
//         console.log( obj.company.catchPhrase )
//         const newChild = document.createElement( 'li' )
//         newChild.innerText = obj.company.catchPhrase
//         ul_find.appendChild( newChild )
//     }
// }