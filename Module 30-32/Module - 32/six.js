function display ()
{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch( url )
        .then( res => res.json() )
        .then( data => displayPosts( data ) )
}
function displayPosts ( data )
{
    for ( const da of data )
    {
        console.log( da )
        const containerTop = document.getElementById( 'container' )
        const newElement = document.createElement( 'div' )
        newElement.innerHTML = `<h5>Title : ${ da.title }</h5>`
        containerTop.appendChild( newElement )
        newElement.classList.add( 'post' )
    }
}


// extra
let name = 'sakib'
function loadData ( name )
{
    console.log( name )
}