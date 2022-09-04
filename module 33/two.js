const loadRandom = () =>
{
    const url = 'https://randomuser.me/api/?results=50'
    fetch( url )
        .then( res => res.json() )
        .then( data => displayUser( data.results ) )
}
const displayUser = ( user ) =>
{
    user.forEach( us =>
    {
        console.log( us )
        const mainDiv = document.getElementById( 'container' )
        const newElement = document.createElement( 'div' )
        newElement.classList.add( 'post' )
        newElement.innerHTML = `<img src='${ us.picture.large }'><h4>Name: ${ us.name.title } ${ us.name.first } ${ us.name.last }</h4>
        <p>Email: ${ us.email }</p>
        <p></p>`
        mainDiv.appendChild( newElement )
    } )
}

loadRandom()