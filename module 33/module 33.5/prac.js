const loadData = () =>
{
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch( url )
        .then( res => res.json() )
        .then( data => displayData( data ) )
}
const displayData = ( data ) =>
{
    data.forEach( da =>
    {
        // console.log( da )
        const parent = document.getElementById( 'parent' )
        const child = document.createElement( 'div' )
        child.classList.add( 'child' )
        child.innerHTML = `<div onclick='displayDetail(${ da.id })'><h4>Email: ${ da.email }</h4>
    <p>Name: ${ da.name }</p></div>`
        parent.appendChild( child )
    } );
}
const displayDetail = ( data ) =>
{
    const url = `https://jsonplaceholder.typicode.com/comments/${ data }`
    // console.log( url )
    fetch( url )
        .then( res => res.json() )
        .then( data => displatDetailSingle( data ) )
}
const displatDetailSingle = ( data ) =>
{
    const mainDiv = document.getElementById( 'top-div' )
    mainDiv?.classList.add( 'child' )
    mainDiv.innerHTML = `<h1>name: ${ data.name } </h1>
    <p>email: ${ data.email } </p>`
    // console.log( data )
}
loadData()