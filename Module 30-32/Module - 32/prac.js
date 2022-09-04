const loadValue = () =>
{
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch( url )
        .then( res => res.json() )
        .then( data => detailData( data ) )
}
const detailData = ( data ) =>
{
    for ( const da of data )
    {
        console.log( da )
        const mainDiv = document.getElementById( 'main-div' )
        const newElement = document.createElement( 'div' )
        newElement.innerHTML = `<h4>Name: ${ da.name }</h4>
    <p>email: ${ da.email }</p>`
        mainDiv.appendChild( newElement )
        newElement.style.border = '2px solid green'
        newElement.style.padding = '10px'
    }
}