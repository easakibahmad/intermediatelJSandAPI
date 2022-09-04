// const loadData = () =>
// {
//     const url = 'https://randomuser.me/api/?gender=female'
//     fetch( url )
//         .then( res => res.json() )
//         .then( data => displayData( data.results[ 0 ] ) )
//         .catch( err => console.log( err ) )
// }

const asyncUsing = async () =>
{
    const url = 'https://randomuser.me/api/?gender=female'
    try
    {
        const res = await fetch( url )
        const data = await res.json()
        displayData( data.results[ 0 ] )
    }
    catch ( err )
    {
        console.log( err )
    }
}
const displayData = ( data ) =>
{
    console.log( data )
}