// part 1
// check two objects are same or not
// here reference is not same
// const first = {}
// const second = {}
// here reference is same
// const third = second
// if ( first === second )
// {
//     console.log( 'they are same' )
// }
// else
// {
//     console.log( 'different' )
// }




// part 2
const first = { c: 6, a: 2 }
const second = { b: 5, a: 2 }
const firstString = JSON.stringify( first )
const secondString = JSON.stringify( second )
// if ( firstString === secondString )
// {
//     console.log( 'they are same' )
// }
// else
// {
//     console.log( 'different' )
// }





// part 3
function checkTrueFalse ( first, second )
{
    const firstKeys = Object.keys( first )
    const secondKeys = Object.keys( second )
    if ( firstKeys.length === secondKeys.length )
    {
        for ( const key of firstKeys )
        {
            if ( first[ key ] !== second[ key ] )
            {
                return false
            }
        }
        return true
    }
    else
    {
        return false
    }
}
const check = checkTrueFalse( first, second )
// console.log( check )