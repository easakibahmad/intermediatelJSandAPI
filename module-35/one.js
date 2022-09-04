// 1. create Object using literals
const player = {}
player.name = 'sakib'
player.specility = 'developer'
// method
player.bat = function ()
{
    console.log( 'hello sakib' )
}
// console.log( player )
// player.bat()
const student = {
    name: 'kai havartz',
    speciality: 'footballer',
    play: function ()
    {
        console.log( 'playing football as a chelsea football club player' )
    },
    salary: '100000 usd'
}
// console.log( student )

// 2. object constructor
const person = new Object()
// console.log( person )

// 3. object create method
const item = Object.create( student )
// console.log( item.name )

// 4. class
class classPerson
{
    name = 'timo werner'
    address = 'Liebzig, Germany'
    constructor ( age )
    {
        this.age = age
    }
}
const personOne = new classPerson( 24 )
// console.log( personOne )

// 5. function
function myName ( name, age )
{
    this.name = name
    this.age = age
}
const myNameOne = new myName( 'sakib', 22 )
// console.log( myNameOne )