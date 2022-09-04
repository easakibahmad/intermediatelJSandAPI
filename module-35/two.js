const student = {
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
        const valueOne = this.exam()
        return `${ valueOne } & ${ this.name } is taking improvement exam on ${ subject }`
    },
    treat: function ( m, b )
    {
        this.money = this.money - m - b
        return this.money
    }
}
const valueTwo = student.improvement( 'physics' )
console.log( valueTwo )
const valueThree = student.treat( 200, 100 )
console.log( valueThree )
const valueFour = student.treat( 200, 100 )
console.log( valueFour )