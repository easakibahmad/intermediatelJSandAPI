const loadPhones = ( search ) =>
{
    const url = `https://openapi.programming-hero.com/api/phones?search=${ search }`
    fetch( url )
        .then( res => res.json() )
        .then( data => diplayPhones( data.data ) )
}
const diplayPhones = ( data ) =>
{
    const parent = document.getElementById( 'parent' )
    parent.innerHTML = ''
    data = data.slice( 0, 5 )

    if ( data.length === 0 )
    {
        document.getElementById( 'no-phone' )?.classList.remove( 'd-none' )
    }
    else
    {
        document.getElementById( 'no-phone' )?.classList.add( 'd-none' )
    }
    data.forEach( da =>
    {
        console.log( da )

        const child = document.createElement( 'div' )
        child.classList.add( 'col' )
        child.innerHTML = `<div class="card">
            <img src="${ da.image }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${ da.phone_name }</h5>
                <p class="card-text">${ da.slug }</p>
            </div>
        </div>`
        parent?.appendChild( child )
    } );
}
document.getElementById( 'search-btn' ).addEventListener( 'click', function ()
{
    const inValue = document.getElementById( 'search-input' )
    const inValueFound = inValue.value
    loadPhones( inValueFound )
    inValue.value = ''
} )
