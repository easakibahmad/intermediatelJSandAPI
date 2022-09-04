const loadData = () =>
{
    const url = `https://randomuser.me/api/`
    fetch( url )
        .then( res => res.json() )
        .then( data => displayData( data.results[ 0 ] ) )
}
const displayData = ( data ) =>
{

    console.log( data )
    const parent = document.getElementById( 'parent' )
    parent.classList.add( 'child' )
    parent.innerHTML = `<h4>Email: ${ data.email }</h4>
    <img src='${ data.picture.large }'>
    <div>Location: ${ data.location.city }, ${ data.location.state }, ${ data.location.country }<br>
    Age: ${ data.registered.age }</div>`
}