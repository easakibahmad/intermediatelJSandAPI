// part 1
const sakibAli = {
    name: 'sakib',
    age: 22,
    money: 4000,
    subjects: [ 'math', 'chemistry', 'physics', 'biology' ],
    // methods
    exam: function ()
    {
        return this.name
    },
    improvement: function ( subject )
    {
        const valueOne = sakibAli.exam()
        return `${ valueOne } & ${ this.name } is taking improvement exam on ${ subject }`
    },
    treat: function ( m, b )
    {
        this.money = this.money - m - b
        return this.money
    }
}

const webAli = {
    name: 'web ali',
    money: 3000
}

// using call
const resultTwo = sakibAli.exam.call( webAli )
// console.log( resultTwo )
const resultThree = sakibAli.improvement.call( webAli, 'biology' )
// console.log( resultThree )
const resultFour = sakibAli.treat.call( webAli, 300, 100 )
// console.log( resultFour )

// using apply
const resultFive = sakibAli.treat.apply( webAli, [ 300, 100 ] )
// console.log( resultFive )

// use bind
const resultSix = sakibAli.treat.bind( webAli )
const remainIng = resultSix( 300, 100 )
// console.log( remainIng )