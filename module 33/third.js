const loadCountrys = () =>
{
    const url = 'https://restcountries.com/v3.1/all'
    fetch( url )
        .then( res => res.json() )
        .then( data => displayCountrys( data ) )
}
const displayCountrys = data =>
{
    for ( const da of data )
    {
        // console.log( da )
        const mainDiv = document.getElementById( 'container' )
        const newElement = document.createElement( 'div' )
        newElement.classList.add( 'country' )
        newElement.innerHTML = `<p>Name: ${ da.name.common } ${ da.altSpellings
        [ 0 ] ? da.altSpellings[ 0 ] : 'nothing' }</p>
        <p>Capital: ${ da.capital ? da.capital[ 0 ] : 'no capital' }</p>
        <button onclick="loadDetail('${ da.cca2 }')">Details</button>`
        mainDiv.appendChild( newElement )
    }
}







const loadDetail = ( code ) =>
{
    const url = `https://restcountries.com/v3.1/alpha/${ code }`
    fetch( url )
        .then( res => res.json() )
        .then( data => displayFinally( data[ 0 ] ) )
}
const displayFinally = data =>
{
    console.log( data )
    const detailDiv = document.getElementById( 'top-container' )
    detailDiv.innerHTML = `<h1>Name: ${ data.name.common }</h1>
    <p><img src="${ data.flags.png }" alt=""></p>`
}
loadCountrys()